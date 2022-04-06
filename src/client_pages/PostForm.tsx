import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {createPost, getPost, updatePost} from '../client_api/post';
import { useNavigate, useParams } from 'react-router-dom';

export type POST_TYPE = {
    title: string,
    desc: string,
    author: string,
    category: string,
    thumbnail: string,
    status: number
};

export default function PostForm() {
    const navigate = useNavigate();
    const {id} = useParams();

    const [imageBase64, setImageBase64] = useState<any>('');

    // react hook form
    // Khai báo biến register để đăng ký cho các
    // thành phần trong form
    // useForm cần truyền vào giá trị mặc định của form
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues: {
            title: '',
            desc: '',
            author: '',
            category: '',
            thumbnail: '',
            status: 0
        }
    });

    const onSubmit: SubmitHandler<POST_TYPE> = (data) => {
        const submitData = {
            ...data,
            status: +data.status,
            thumbnail: imageBase64
        };
        if (id) {
            return handleUpdatePost(submitData);
        }
        return handleCreatePost(submitData);
    };

    const handleCreatePost = async (data: POST_TYPE) => {
        const response = await createPost(data);

        if (response.status === 201) {
            navigate('/posts');
        }
    };

    const handleUpdatePost = async (data: POST_TYPE) => {
        const response = await updatePost(id, data);

        if (response.status === 200) {
            navigate('/posts');
        }

    }

    const handleGetPost = async (id: string) => {
        const response = await getPost(id);
        if (response.status === 200) {
            reset({
                ...response.data,
                status: `${response.data.status}`
            });
        }
    };

    const getEventResult = (event: any) => {
        if (event && event.target && typeof event.target.result == 'string') {
            return event.target.result;
        }

        return '';
    };

    const handleChangeFile = (event :any) => {
        const acceptImageTypes = ['image/png', 'image/jpg'];
        const file = event.target.files[0];
        if (!file) {
            console.log('Không có file');
            return;
        } else if (file.size > 500000) {
            console.log('File quá lớn');
            return;
        } else if (!acceptImageTypes.includes(file.type)) {
            console.log('File không đúng định dạng');
            return;
        }

        // 1. Định nghĩa 1 đối tượng đọc file
        const reader  = new FileReader();
        // 2. Định nghĩa việc load file
        reader.onload = (e) => {
            const image = new Image();
            if (e && e.target) {
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type);
                setImageBase64(e.target.result);
            }
        };

        // 3. Load file mà lấy được từ input
        reader.readAsDataURL(file);
    };

    // console.log(imageBase64);

    useEffect(() => {
        if(id) {
            handleGetPost(id);
        }
    }, [id]);


  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Title</label>
                <input
                    type="text"
                    placeholder='Tiêu đề'
                    {...register(
                        'title',
                        {
                            required: {value: true, message: 'Bắt buộc'},
                        }
                    )}
                />
                <div>{errors.title?.message}</div>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input
                    type="text"
                    placeholder='Mô tả'
                    {...register(
                        'desc',
                        {
                            required: true
                        }
                    )}
                />
            </div>
            <div>
                <label htmlFor="">Author</label>
                <input type="text" placeholder='author'
                    {...register('author')}
                />
            </div>
            <div>
                <label htmlFor="">Category</label>
                <input type="text" placeholder='category'
                    {...register('category')}
                />
            </div>
            <div>
                <label htmlFor="">Thumbnail</label>
                <input type="text" placeholder='thumbnail'
                    {...register('thumbnail')}
                />
            </div>
            <div>
                <label htmlFor="">Image</label>
                <input
                    type="file"
                    placeholder='Image'
                    onChange={(event) => handleChangeFile(event)}
                />
                <img src={imageBase64} width={200} alt="" />
            </div>
            <div>
                <label htmlFor="">Status</label>
                <input type="radio" {...register('status')} value={0} />Không kích hoạt
                <input type="radio" {...register('status')} value={1} />Kích hoạt
            </div>

            <button>Submit</button>
        </form>
    </div>
  )
};
