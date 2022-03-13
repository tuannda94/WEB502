import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
const Student = () => {
    const [data, setData] = useState(
        [
            { id: 1, name: 'Nguyễn Văn Linh', age: 21, phone: '0369053052', email: 'linhnvph13162@fpt.edu.vn', avatar: 'https://picsum.photos/50/50' },
            { id: 2, name: 'Nguyễn Đức Hải', age: 22, phone: '0968856903', email: 'haindph13158@fpt.edu.vn', avatar: 'https://picsum.photos/50/50' },
            { id: 3, name: 'Trương Mạnh Dũng', age: 22, phone: '098888888', email: 'dungtmph12934@fpt.edu.vn', avatar: 'https://picsum.photos/50/50' },
        ]
    )
    const removeProduct = (id: number) => {
        setData(data.filter(item => item.id !== id))
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>SDT</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) =>
                    <tr key={index}>
                        <td style={{ verticalAlign: "middle" }}>{index + 1}</td>
                        <td style={{ verticalAlign: "middle" }}>{item.name}</td>
                        <td style={{ verticalAlign: "middle" }}>{item.age}</td>
                        <td style={{ verticalAlign: "middle" }}>{item.phone}</td>
                        <td style={{ verticalAlign: "middle" }}>{item.email}</td>
                        <td style={{ verticalAlign: "middle" }}>
                            <img src={item.avatar} alt="" />
                        </td>
                        <td><button className='btn btn-danger' onClick={() => removeProduct(item.id)}>Xóa</button></td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default Student