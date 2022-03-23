import api from './axios';

export const getProducts = () => {
    return api.get('/products');
};

export const getProduct = (id:string|undefined) => {
    return api.get(`/products/${id}`);
};

export const createProduct = (data :any) => {
    return api.post('/products', data);
};
