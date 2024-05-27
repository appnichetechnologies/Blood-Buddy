const Hero_Content = () =>
{
    return (
        <section className='relative w-full mt-[25dvh]'>
            <div className='text-black z-3 gap-2 font-bold font-serif italic flex flex-col p-4 w-auto md:w-[40%]'>
                <div className='flex align-center justify-center flex-col ml-8'>
                    <h1 className='flex flex-wrap text-3xl md:text-6xl md:px-12 md:ml-16'> Start Saving Lives </h1>
                </div>
                <p className='flex flex-wrap p-6 text-xl md:text-2xl font-normal md:px-12 md:ml-16'>Become a donor or request for blood And help save lives</p>
                
                <div className='mt-4 flex justify-center'>
                    <a href='/register'>
                        <button className='font-normal text-4xl p-4 border border-black rounded-xl 
                        duration-500 hover:bg-red-500 active:bg-red-500 active:text-white 
                        hover:text-neutral-50 drop-shadow-md hover:drop-shadow-xl
                        '>
                            Register
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero_Content;
