const BackgroundVideo = () => 
{
    return (
        <>
            <video autoPlay muted loop className="w-[100dvw] h-[100%] fixed object-cover -z-100 overflow-x-hidden">
				<source src="/background/bg.mp4" type="video/mp4" />
			</video>
        </>
    );
}
export default BackgroundVideo;