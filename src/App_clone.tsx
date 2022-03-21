import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './client_pages/Dashboard';
import ClientLayout from './client_pages/layout';
import ProductDetail from './client_pages/ProductDetail';
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
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default AppClone;
