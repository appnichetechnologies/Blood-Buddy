import React from "react";
import Image from "next/image";
const Testimonials = () => 
{
    const reviews = [
        {
            'id': 1,
            'image': '/testimonials/1.PNG',
            'name': 'Dr.Kabir Khatri',
            'content': "I have been a part of this organization for quite some time and each time I'm amazed by the seamless and efficient system in place.The importance of timely care especially in the recent times is known and having Blood Buddy takes a load off my mind."
        },
        {
            'id': 2,
            'image': '/testimonials/2.PNG',
            'name': 'Amit Mangal',
            'content': "I found Blood Buddy at a time that my mother was in urgent need of blood. Blood Buddy arranged the required amount in no time. It saved us a lot of hassle and worry especially in such a trying time.Thank you Blood Buddy!"
        },
        {
            'id': 3,
            'image': '/testimonials/3.PNG',
            'name': 'Esha Puri',
            'content': "Blood Buddy is just awesome! I just donated for the first time and it could not have been easier.Blood Buddy is doing a very important work and I'm happy that I could contribute . It's hygienic,safe and convenient, I recommend it to everyone!"
        }
    ];

    return (
        <>
            <div className='relative bg-black bg-opacity-75 w-[100%] h-auto pb-16'>
                <div className='flex flex-col text-center justify-center items-center'>
                    <div className='w-[80%] font-serif pt-4'>
                        <h1 className='text-white uppercase font-bold text-2xl md:text-4xl pt-24'>
                            Testimonials
                        </h1>
                        <h1 className='text-white uppercase font-normal -mt-16 text-xl md:text-2xl pt-24'>
                            See what our users have to say
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-10 items-center justify-center pt-[10dvh]">
                        {
                            reviews.map((items) => (
                                <div key={items.id} className="md:w-[25dvw] flex flex-col">
                                    <div className="p-4 w-auto duration-500 hover:scale-110 flex flex-col gap-2 items-center">
                                        <div className="flex justify-center items-center w-[100px]">
                                            <Image
                                                src={items.image}
                                                width={350}
                                                height={350}
                                                alt={items.name}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <h1 className='text-red-400 font-normal pt-4 text-xl font-serif'>
                                            {items.name}
                                        </h1>
                                        <h2 className='flex flex-wrap text-sm'>
                                            {items.content}
                                        </h2>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials;