'use client';
import React from "react";
import { useState } from "react";
import axios from "axios";

const Help = () => 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [medical_history, setMedHistory] = useState('');
    const [blood_group, setBloodGroup] = useState('');
    const [user_type, setUserType] = useState('');
    const [message, setMessage] = useState('');

    const donation = async (event) => {
        event.preventDefault();
        var data;
        try 
        {
            if (name != '' && email != '' && contact != '' 
            && medical_history != '' && blood_group != '' && user_type != '' && message != '') {
                data = await axios.post('/api/donators/insert', {
                    name,
                    email,
                    contact,
                    medical_history,
                    blood_group,
                    user_type,
                    message
                });
                console.log(data);

                if(data.status===200)
                {
                    alert(data.data.message);
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
                alert(`Temporary Server Down, Please Try Again Later.`)
            }
        }
    }

    return (
        <>

            <div className='relative bg-white w-[100%] h-[170dvh] pb-16 flex items-center justify-center'>
                <div className="flex justify-center">
                    <div className="shadow-2xl flex h-auto">
                        <div className="md:block hidden">
                            <img src="/help/donation.jpg" className="w-[35dvw] h-[130dvh]"></img>
                        </div>

                        <div className="md:w-[35dvw] w-[90dvw] text-black flex flex-col justify-center items-center pb-[5dvh]">
                            <h1 className="w-full p-6 flex justify-center font-bold text-xl md:text-3xl">
                                Connect with us
                            </h1>
                            <div className="w-full p-6 flex -mt-10 justify-center font-bold text-2xl">
                                <div className="bg-teal-400 w-[40dvw] md:w-[15dvw] h-[1dvh] rounded"></div>
                            </div>
                            <form onSubmit={donation}>
                                <div className="text-sm flex flex-col justify-center gap-2 md:w-auto w-[80dvw]">
                                    <input
                                        type="text"
                                        className="border-2 px-10 py-2 text-center bg-slate-100 text-black"
                                        placeholder="Your Name"
                                        id="name"
                                        value={name}
                                        onChange={ev => setName(ev.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="border-2 px-10 py-2 text-center bg-slate-100 text-black"
                                        placeholder="Your Email"
                                        id="email"
                                        value={email}
                                        onChange={ev => setEmail(ev.target.value)}
                                    />
                                    <input
                                        type="tel"
                                        className="border-2 px-10 py-2 text-center bg-slate-100  text-black"
                                        placeholder="Phone"
                                        id="contact"
                                        value={contact}
                                        onChange={ev => setContact(ev.target.value)}
                                    />

                                    <textarea 
                                        placeholder="Medical History" 
                                        className="border-2 px-10 py-2 text-center bg-slate-100 text-black"
                                        id="medical_history"
                                        value={medical_history}
                                        onChange={ev => setMedHistory(ev.target.value)}
                                    />

                                    <select
                                        className="text-xs border-2 px-10 py-2 text-center bg-slate-100"
                                        id="blood_group"
                                        value={blood_group}
                                        onChange={ev => setBloodGroup(ev.target.value)}
                                    >
                                        <option>--- BLOOD GROUP ---</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                    </select>

                                    <select
                                        className="text-xs border-2 px-10 py-2 text-center bg-slate-100"
                                        id="user_type"
                                        value={user_type}
                                        onChange={ev => setUserType(ev.target.value)}
                                    >
                                        <option>--- SELECT USER TYPE ---</option>
                                        <option>Donor</option>
                                        <option>Receiver</option>
                                    </select>

                                    <textarea 
                                        placeholder="Message" 
                                        className="border-2 px-10 py-2 text-center bg-slate-100 text-black"
                                        id="message"
                                        value={message}
                                        onChange={ev => setMessage(ev.target.value)}
                                    />

                                </div>

                                <button className="bg-teal-400 text-white font-bold rounded px-2 py-1 mt-4 w-[100%]">Send</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Help;