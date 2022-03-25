import React, { useState } from 'react';
import { createProduct } from '../client_api/product';
import {useNavigate} from 'react-router-dom';

function ProductForm () {
    const navigate = useNavigate();

    // State lưu giá trị của 2 input, được cập nhật khi input onChange
    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const onValidate = (data: {name: string, price: number}) => {
        const validateMessages = [];
        console.log(data, data.name, data.name.length);
        if (!data.name) {
            validateMessages.push('Tên không được để trống');
        } else if (data.name.length < 6) {
            validateMessages.push('Tên >= 6 ký tự');
        }

        if (!data.price) {
            console.log(data.price)
            validateMessages.push('Giá không được để trống hoặc < 1');
        }

        return validateMessages;
    }

    const handleSubmit = async () => {
        // Validate: bắt buộc nhập, tên sp >= 6 ký tự, giá >=1
        const submitData = {
            name: nameValue,
            price: +priceValue
        };
        // Nhận kq trả về từ việc validate
        const validate = onValidate(submitData);
        // Nếu không lỗi gì thì submit
        if (validate.length === 0) {
            // Nếu messages có phần tử -> Lưu về thành mảng rỗng
            messages.length && setMessages([]);
            //submit
            const response = await createProduct(submitData);
            if (response.status === 201) {
                navigate('/products');
            }
        } else {
            // Nếu lỗi thì sẽ sử dụng state để lưu giá trị hiển thị
            setMessages(validate);
        }

        console.log(submitData);
    };

    return (
        <div>
            <h1>Thêm mới sản phẩm</h1>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Tên SP</label>
                        <input
                            type="text"
                            id='name'
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Giá sp</label>
                        <input
                            type="number"
                            id='price'
                            onChange={(e) => setPriceValue(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => handleSubmit()}
                        type='button'>Submit</button>
                    </div>
                </form>
            </div>
            {
                messages.length > 0
                ? <ul>
                    {
                        messages.map((message, index) => (
                            <li key={index}>{message}</li>
                        ))
                    }
                </ul>
                : null
            }
        </div>
    );
};

export default ProductForm;
