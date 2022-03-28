import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function PostForm() {
    // react hook form
    // Khai báo biến register để đăng ký cho các
    // thành phần trong form
    // useForm cần truyền vào giá trị mặc định của form
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            title: '',
            desc: ''
        }
    });

    console.log(errors);

    const onSubmit: SubmitHandler<{
        title: string,
        desc: string
    }> = (data) => {
        console.log(data);
    };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder='Tiêu đề'
                {...register(
                    'title',
                    {
                        required: {value: true, message: 'Bat buoc'},
                    }
                )}
            />
            <div>{errors.title  ? 'Bắt buộc' : ''}</div>
            <div>{errors.title?.message || 'Bắt buộc'}</div>
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
            <button>Submit</button>
        </form>
    </div>
  )
};
