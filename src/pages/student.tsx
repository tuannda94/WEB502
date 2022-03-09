import React, { useEffect, useState } from 'react'

function Student() {
    const [stud, setStud] = useState([]);
    return (
        <div>
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">Students List</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Age</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Phone</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-center">Action</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden grid items-center rounded-full"><img className="rounded-full object-cover" src="https://source.unsplash.com/random?person" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div className="font-medium text-gray-800">Alex Shatov</div>
                                                </div>

                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">18</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">0987654321</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">
                                                    <button className='px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm '>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden grid items-center rounded-full"><img className="rounded-full object-cover" src="https://source.unsplash.com/random?man" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div className="font-medium text-gray-800">Alex Shatov</div>
                                                </div>

                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">18</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">0987654321</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">
                                                    <button className='px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm '>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden grid items-center rounded-full"><img className="rounded-full object-cover" src="https://source.unsplash.com/random?actor" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div className="font-medium text-gray-800">Alex Shatov</div>
                                                </div>

                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">18</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">0987654321</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">
                                                    <button className='px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm '>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden grid items-center rounded-full"><img className="rounded-full object-cover" src="https://source.unsplash.com/random?potrait" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div className="font-medium text-gray-800">Alex Shatov</div>
                                                </div>

                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">18</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">0987654321</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">
                                                    <button className='px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm '>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden grid items-center rounded-full"><img className="rounded-full object-cover" src="https://source.unsplash.com/random?women" width="40" height="40" alt="Alex Shatov" /></div>
                                                    <div className="font-medium text-gray-800">Alex Shatov</div>
                                                </div>

                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">18</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">0987654321</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">alexshatov@gmail.com</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">
                                                    <button className='px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm '>Delete</button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Student