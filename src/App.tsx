import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// them thanh phan Login trong thu muc pages/login/index.tsx
// o phia component Login, export default
// Voi import default thi co the doi ten
import Login from './pages/login';
// Voi import khong default thi co the as
import {USER_LOGIN as LOGIN_USER} from './pages/login';
import TableCustom from './pages/table';

import {Routes, Route, Link} from 'react-router-dom';
import ClientLayout from './pages/layouts/ClientLayout';
import Product from './pages/product/Product';
import AdminLayout from './pages/layouts/AdminLayout';
import HomePage from './pages/homepage';
import AdminHomePage from './pages/adminHomePage';
import ProductDetail from './pages/product/ProductDetail';
import ProductForm from './pages/product/ProductForm';

type Student = {
  name: string,
  age: number,
  phone: string,
  address: string
};

type Students = Student[];

function App() {
  console.log('App view render');
  // dinh nghia state gom 2 phan tu trong 1 mang
  // phan tu 1: state
  // phan tu 2: phuong thuc cap nhat state
  // useState(nhan vao gia tri mac dinh cua count)
  // const [ten_state, ten_phuong_thuc_thay_doi] = useState<kieu>(gt macdinh);

  // Khi state thay doi bang phuong thuc setState thi view moi render lai
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  // State trang thai hien thi bang
  const [isShowTable, setShowTable] = useState<boolean>(true);
  // Them state luu student de sau khi them se tien hanh render lai
  const [students, setStudents] = useState<Students>([
    {
      name: 'tuannda3',
      age: 10,
      address: 'HN',
      phone: '123123123'
    }
  ])
  const headCells = [
    {
      label: 'Ten',
      key: 'name'
    },
    {
      label: 'Tuoi',
      key: 'age'
    },
    {
      label: 'Dia chi',
      key: 'address'
    },
    {
      label: 'SDT',
      key: 'phone'
    },
  ];

  // let count = 0;

  // const updateCount = () => count++;
  const onAddStudent = () => {
    const newStudents = [
      ...students,
      {
        name: 'tuannda3',
        age: 10,
        address: 'HN',
        phone: '123123123'
      }
    ];
    setStudents(newStudents);
  }


  return (
    <div className="App">
      <div>
        <ul>
          <li><Link to={'/'} >Client Home</Link></li>
          <li> <Link to={'/product'} >Client Product</Link></li>
          <li><Link to={'/admin'} >Admin Home</Link></li>
          <li><Link to={'/admin/product'} >Admin Product</Link></li>
        </ul>
      </div>

      {/* Cau hinh route */}
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          {/* / */}
            <Route index element={<HomePage />} />
            {/* /product */}
            <Route path='product' element={<Product />} />
        </Route>

        <Route path='admin' element={<AdminLayout />}>
          {/* /admin */}
            <Route index element={<AdminHomePage />} />
            {/* /admin/product */}
            {/* <Route path='product' element={<Product />} /> */}
            <Route path='product'>
              <Route index element={<Product />} />
              <Route path=':id' element={<ProductDetail />} />
              <Route path=':id/edit' element={<ProductForm />} />
            </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
