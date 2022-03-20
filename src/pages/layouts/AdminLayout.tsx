import React from 'react';
import {Outlet} from 'react-router-dom';

type PropsType = {};

function AdminLayout(props: PropsType) {
    return (
        <div>
            <header>Admin page</header>
            <div className='row'>
                <div className="col-2">
                    <aside>Aside</aside>
                </div>
                <div className="col-10">
                    <main>
                        Content
                        <Outlet />
                        {/* Day se la phan co su thay doi khi render */}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
