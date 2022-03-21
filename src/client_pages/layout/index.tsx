import React from 'react';
import {Outlet} from 'react-router-dom';

function ClientLayout () {
    return (
        <div>
            <header>HEADER</header>
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
