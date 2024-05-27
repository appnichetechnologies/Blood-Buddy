'use client'
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { useContext, useState } from "react";
import axios from "axios";

const RegisterContent = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register_page = async (event) => {
        event.preventDefault();
        var data;

        try 
        {
           if(username!='' && password!='' && email!='')
           {
                data = await axios.post('/api/user/register', {
                    username,
                    email,
                    password
                });

                console.log(data);
                if(data.status===200)
                {
                    await alert(data.data.message);
                    window.location.href = "/";
                }
                else
                {
                    alert(`Login Failed :- ${data.data.message}`)
                }
            }
            else {
                alert('Please Fill Valid Values');
            }
        }
        catch (e) 
        {
            if(data!=null | data!=undefined)
            {
                alert(`Login failed:- ${data.data.message}`);
            }
            else
            {
                alert(`Invalid Username & Password.`)
            }
        }
    }



    return (
        <>
            <div className='relative bg-white -mt-2 w-[100%] h-auto pb-16 flex items-center justify-center'>
                <div className="flex justify-center">
                    <div className="shadow-2xl flex">
                        <div>
                            <img src="/register/regphoto.png" className="w-[35dvw]"></img>
                        </div>

                        <div className="w-[35dvw] text-black bg-red-400 flex flex-col items-center text-white">
                            <h1 className="w-full p-6 flex justify-center uppercase font-bold text-2xl">
                                Start Saving Lives
                            </h1>
                            <form onSubmit={register_page}>
                                <div className="flex flex-col gap-2 ">
                                    <div className="flex gap-4 bg-white rounded-xl w-[105%]">
                                        <div id="user" className="px-2 text-red-400 font-bold text-3xl flex justify-center items-center">
                                            <FaRegUserCircle />
                                        </div>
                                        <input
                                            type="text"
                                            className="px-1 py-2 text-black"
                                            placeholder="Username"
                                            id="username"
                                            value={username}
                                            onChange={ev => setUsername(ev.target.value)}
                                        />
                                    </div>

                                    <div className="flex gap-4 bg-white rounded-xl w-[105%]">
                                        <div id="user" className="px-2 text-red-400 font-bold text-3xl flex justify-center items-center">
                                            <TbPasswordUser />
                                        </div>
                                        <input
                                            type="password"
                                            className="px-1 py-2 text-black"
                                            placeholder="Password"
                                            id="password"
                                            value={password}
                                            onChange={ev => setPassword(ev.target.value)}
                                        />
                                    </div>

                                    <div className="flex gap-4 bg-white rounded-xl w-[105%]">
                                        <div id="user" className="px-2 text-red-400 font-bold text-3xl flex justify-center items-center">
                                            <MdEmail />
                                        </div>
                                        <input
                                            type="email"
                                            className="px-1 py-2 text-black"
                                            placeholder="Email"
                                            id="email"
                                            value={email}
                                            onChange={ev => setEmail(ev.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="flex gap-6 flex justify-center">
                                    <button className="border-2 rounded-2xl font-bold px-4 py-1 mt-4 w-[48%]">Register</button>
                                    <a href="/login" className="border-2 flex justify-center rounded-2xl  bg-white text-red-400 font-bold border-white px-4 py-1 mt-4 w-[40%]">
                                        Login
                                    </a>
                                </div>

                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterContent;