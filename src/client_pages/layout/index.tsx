import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function ClientLayout () {
    return (
        <div>
            <header>HEADER</header>
            <nav>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/products'}>Product</Link></li>
                </ul>
            </nav>
            <main>
                {/* CONTENT */}
                {/* Đây là phần thay đổi */}
                {/* Component render từ prop element của <Route /> */}
                <Outlet />
            </main>
            <footer>
                FOOTER
            </footer>
        </div>
    )
};

export default ClientLayout;
