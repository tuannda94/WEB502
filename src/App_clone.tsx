import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './client_pages/Dashboard';
import ClientLayout from './client_pages/layout';
import PostDetail from './client_pages/PostDetail';
import PostForm from './client_pages/PostForm';
import PostList from './client_pages/PostList';
import ProductDetail from './client_pages/ProductDetail';
import ProductForm from './client_pages/ProductForm';
import ProductList from './client_pages/ProductList';

// function ClientRoute() {
//     return <div>
//         <header>HEADER</header>
//         <main><Route /></main>
//         <footer>FOOTER</footer>
//     </div>
// }
// <ClientRoute />

function AppClone() {
    return (
        <div>
            <h1>App Clone</h1>
            <Routes>
                {/* <Route path={'/'} element={<Dashboard />} />
                <Route path={'products'} element={<ProductList />} />
                <Route path={'products/:id'} element={<ProductDetail />} /> */}

                {/* Bọc các route con bên trong */}
                {/* Route bên ngoài sẽ định nghĩa layout */}
                {/* element con sẽ được render vào Outlet */}
                <Route path={'/'} element={<ClientLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={'products'}>
                        <Route index element={<ProductList />} />
                        <Route path={':id'} element={<ProductDetail />} />
                        <Route path={'create'} element={<ProductForm />} />
                        <Route path={'edit/:id'} element={<ProductForm />} />
                    </Route>
                    <Route path={'posts'}>
                        <Route index element={<PostList />} />
                        <Route path={':id'} element={<PostDetail />} />
                        <Route path={'create'} element={<PostForm />} />
                        <Route path={'edit/:id'} element={<PostForm />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AppClone;
