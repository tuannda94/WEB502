import React from "react";
import "./student.css";

function Students(){
    const data = [
        {
            id: "1",
            name: "nguyễn trần khải",
            tuoi: 20,
            phone: "0352606412",
            email: "khai@gmail.com",
            img: "https://upload-os-bbs.mihoyo.com/upload/2020/11/11/6459882/233818cc15e37ce312d297a48580ec3c_8393962438672339678.jpg"
        },
        {
            id: "2",
            name: "nguyễn trần khải",
            tuoi: 20,
            phone: "0352606412",
            email: "khai@gmail.com",
            img: "https://upload-os-bbs.mihoyo.com/upload/2020/11/11/6459882/233818cc15e37ce312d297a48580ec3c_8393962438672339678.jpg"
        },
        {
            id: "3",
            name: "nguyễn trần khải",
            tuoi: 20,
            phone: "0352606412",
            email: "khai@gmail.com",
            img: "https://upload-os-bbs.mihoyo.com/upload/2020/11/11/6459882/233818cc15e37ce312d297a48580ec3c_8393962438672339678.jpg"
        },
        {
            id: "4",
            name: "nguyễn trần khải",
            tuoi: 20,
            phone: "0352606412",
            email: "khai@gmail.com",
            img: "https://upload-os-bbs.mihoyo.com/upload/2020/11/11/6459882/233818cc15e37ce312d297a48580ec3c_8393962438672339678.jpg"
        }
    ] 
    return (
        <div>
            <table className="bang">
                <thead className="tieuDe">
                    <tr>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Số điện thoại</th>
                        <th>email</th>
                        <th>Ảnh đại diện</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                </thead>
                <tbody className="content">
                    {data.map( e => 
                        React.createElement('tr',
                            {
                                key: e.id
                            },
                            React.createElement('td',null,e.name),
                            React.createElement('td',null,e.tuoi),
                            React.createElement('td',null,e.phone),
                            React.createElement('td',null,e.email),
                            React.createElement('td',null,React.createElement('img',{ src: e.img, style: { width: "100px"}},),),
                            React.createElement('td',null,React.createElement('button',{ className: "button" },"xóa",React.createElement('a',null,)))
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Students;