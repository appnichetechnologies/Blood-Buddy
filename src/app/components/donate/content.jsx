import React from "react"

const Donate_Main = () =>
{
    const donate = [
        {
            'id': 1,
            'title': 'Register 🧍🏻'
        },
        {
            'id': 2,
            'title': 'Post a Blood request 🩸'
        },
        {
            'id': 3,
            'title': 'Respond ✅'
        },
        {
            'id': 4,
            'title': 'Get notified 📱'
        },
        {
            'id': 5,
            'title': 'Forever Free 💲❌'
        },
        {
            'id': 6,
            'title': 'Save a Life 🩸🧬'
        },
    ];

    return (
        <>
            <div className='relative w-[100%] h-auto pb-16'>
                <div className="pt-16 gap-4 flex flex-col items-center justify-center w-full">
                    <div>
                        <h1 className="w-[60dvw] md:w-auto text-red-500 font-bold md:text-2xl">
                            Connect with us & save lives around your location
                        </h1>
                    </div>
                    <table className="md:w-[50%] w-[80dvw] font-sans shadow-2xl text-lg text-left rtl:text-right text-white bg-white">
                        <tbody>

                                {
                                    donate.map((items)=>(
                                        <tr key={items.id} className="duration-500 bg-white text-black font-bold hover:scale-110 text-2xl hover:bg-pink-200">
                                            <th scope="row" className="px-6 py-4 font-normal text-white whitespace-nowrap">
                                                <div className="bg-pink-400 flex justify-center rounded-full w-[35px] h-[35px]">
                                                    {items.id}
                                                </div>
                                            </th>
                                            <td className="md:px-6 py-4 md:text-xl text-sm">
                                                {items.title}
                                            </td>
                                            
                                        </tr>
                                    ))
                                }

                                
                                
                                <tr key='image' className="bg-white font-serif duration-500 text-3xl font-black">
                                    <th scope="row" className="px-6 py-4 text-white whitespace-nowrap">
                                    
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex text-black justify-center">
                                            <a href="/register" className="uppercase -ml-12 bg-red-500 text-white md:text-2xl text-xl px-2 py-1 rounded hover:scale-110 duration-500">
                                                Register
                                            </a>
                                        </div>
                                    </td>
                                    
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Donate_Main