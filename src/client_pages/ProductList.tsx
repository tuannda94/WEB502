import React, { Component, useEffect, useState } from 'react';
import { getProducts } from '../client_api/product';
import {Link} from 'react-router-dom';

class ProductListOld extends Component {
    state = {
        count: 0
    };
    // Chạy vào lần đầu tiên, và chỉ chạy 1 lần
    componentDidMount() {
        console.log('didmount', this.state.count);
    }
    // Chạy khi có sự thay đổi state
    componentDidUpdate() {
        console.log('didupdate', this.state.count);
    }

    render() {
        return (
            <div onClick={() => this.setState({
                count: this.state.count + 1
            })}>
                ProductList Class
                <div>{this.state.count}</div>
            </div>
        )
    }
}

type PRODUCT_TYPE = {
    id: number | string,
    name: string,
    price: number
};

function ProductList() {
    // const [count, setCount] = useState<number>(0);
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
    // Thực hiện công việc và lắng nghe sự thay đổi của state
    // 2 tham số: arrow function để thực hiện công việc
    // [các phụ thuộc]: nếu k có phụ thuộc nào -> chỉ chạy 1 lần đầu
    // nếu có phụ thuộc -> khi biến phụ thuộc thay đổi -> chạy lại

    const handleGetProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    console.log(products);

    useEffect(() => {
        handleGetProducts();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/products/${product.id}`}>
                                        <button>Detail</button>
                                    </Link>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default ProductList;
