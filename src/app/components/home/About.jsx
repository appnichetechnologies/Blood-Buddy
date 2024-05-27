import React from 'react'
import Image from "next/image";

const About = () =>
{
    const contents = [
        {
            'id': 1,
            'image': '/about/drop.png',
            'name': 'Blood Drop',
            'title': 'What we do?',
            'content': 'We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.'
        },
        {
            'id': 2,
            'image': '/about/innovation.png',
            'name': 'Innovation',
            'title': 'Innovative',
            'content': 'Blood Buddy is an innovative approach to address global health.We provide immediate access to blood donors.'
        },
        {
            'id': 3,
            'image': '/about/network.png',
            'name': 'Network',
            'title': 'Network',
            'content': 'Blood Buddy is one of several community organizations working together as a network that responds to emergencies in an efficient manner.'
        },
        {
            'id': 4,
            'image': '/about/noti.png',
            'name': 'Notification',
            'title': 'Get notified',
            'content': 'Blood Buddy Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.'
        },
        {
            'id': 5,
            'image': '/about/cost.png',
            'name': 'Cost',
            'title': 'Totally Free',
            'content': "Blood Buddy's ultimate goal is to provide an easy -to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost."
        },
        {
            'id': 6,
            'image': '/about/save.png',
            'name': 'Save',
            'title': 'Save Life',
            'content': 'We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons.Help us by making a gift!'
        },

    ]

    return (
        <>
            <div className='relative bg-slate-200 w-[100%] h-auto pb-16'>

                <div className='flex flex-col text-center'>
                    <div className='font-serif pt-24'>
                        <h1 className='text-black uppercase font-bold text-4xl pt-24'>What is this all about ?</h1>
                    </div>
                    <div className='font-sans px-6'>
                        <h2 className='font-normal text-gray-500 pt-4 text-xl'>
                            We solve the problem of blood emergencies by connecting
                            blood donors directly with people in blood need.
                        </h2>
                    </div>
                </div>

                <div className='flex justify-center'>
                <div className='flex flex-wrap w-[80dvw] gap-16 justify-center pt-16'>
                    {
                        contents.map((items)=>( 
                        <div key={items.id} className='p-6 w-auto h-auto md:w-[23dvw] md:h-[50dvh] shadow-2xl duration-500 hover:scale-110 flex flex-col items-center'>
                            <Image
                                src={items.image}
                                width={300}
                                height={300}
                                alt={items.name}
                                className='md:w-[100px] w-[20dvw]'
                            />
                            <h1 className='text-black uppercase flex flex-wrap font-normal pt-4 text-lg font-serif w-auto'>
                                {items.title}
                            </h1>
                            <p className='font-medium font-sans text-gray-500 pt-4 text-sm'>
                                {items.content}  
                            </p>
                        </div>
                        ))
                    }
                    
                </div>
                </div>


                <div className='flex flex-col text-center items-center'>
                    <div className='font-serif pt-24 w-full'>
                        <h1 className='text-black uppercase font-bold text-4xl pt-24'>
                            Our super heroes 
                        </h1>
                    </div>
                    <div className='font-sans md:w-[60dvw]'>
                        <h2 className='font-normal text-gray-500 p-4 md:text-xl'>
                            We depend on volunteers! Volunteers make up 96% of our total
                            workforce and carry on our humanitarian work. Blood donation is healthy,
                            our volunteers are available 24/7 to help and donate blood. Blood banks store blood
                            bags but our volunteers are there with you in an emergency for a blood transfusion real time.
                        </h2>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;
