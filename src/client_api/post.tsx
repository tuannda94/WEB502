import api from './axios';

export const getPosts = () => {
    return api.get('/posts');
};

export const getPost = (id:string|undefined) => {
    return api.get(`/posts/${id}`);
};

export const createPost = (data :any) => {
    return api.post('/posts', data);
};

export const deletePost = (id: number|string) => {
    return api.delete(`/posts/${id}`);
}
