import axios from './axios';

export const getProducts = () => {
    return axios.get('/products');
};

export const getProduct = (id:number | string) => {
    return axios.get(`/products/${id}`);
}
