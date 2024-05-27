'use client'
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Dashboard_Content = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

		donor_data();
		console.log(data)
	}, []);


    const donor_data = () => 
    {
        axios
        .get("/api/donators/donors")
        .then(function (data) 
        {
            setData(data.data.output)
        });
    }

    const receiver_data = () => 
    {
        axios
        .get("/api/donators/receivers")
        .then(function (data) 
        {
            setData(data.data.output)
        });
    }

    return (
        <>
            <section className="flex w-[100dvw] p-16 justify-center space-x-80">
                <div className="px-3 py-1 border-2 border-red-500 rounded-xl shadow-2xl">
                    <button 
                        className="text-red-500 text-xl font-bold" 
                        onClick={receiver_data}
                    > 
                        Receivers 
                    </button>
                </div>

                <div className="px-3 py-1 bg-red-500 rounded-xl shadow-2xl">
                    <button 
                        className="text-white text-xl font-bold" 
                        onClick={donor_data}
                    >
                        Donors 
                    </button>
                </div>

            </section>


            <div className="mt-10 w-[80dvw] ml-[10dvw] pb-[10dvh]">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase text-white">
                            <tr>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    User Name
                                </th>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    Contact
                                </th>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    Blood Group
                                </th>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    Medical History
                                </th>
                                <th scope="col" class="px-6 py-3 bg-red-500">
                                    Message
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((items) => (
                                    <tr class="border-b duration-500 border-gray-200 text-red-500 font-medium hover:bg-red-500 hover:text-white">
                                        <th scope="row" class="px-6 py-4 duration-500 whitespace-nowrap">
                                            {items.Username}
                                        </th>
                                        <td class="px-6 py-4">
                                            {items.Email}
                                        </td>
                                        <td class="px-6 py-4">
                                            {items.Contact}
                                        </td>
                                        <td class="px-6 py-4">
                                            {items.BloodGroup}
                                        </td>
                                        <td class="px-6 py-4">
                                            {items.MedicalHistory}
                                        </td>
                                        <td class="px-6 py-4">
                                            {items.Message}
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Dashboard_Content;