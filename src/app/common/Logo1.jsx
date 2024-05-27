import React from 'react'
import Image from "next/image";
 
const Logo1 = () => 
{
    return (
        <>
            <div id="logo" className="flex mx-4 absolute">
				<a href="/">
					<Image
						src="/logo/logo1.png"
						width={150}
						height={174}
						className='w-[30dvw] md:w-[7dvw]'
						alt="Blood Buddy Logo"
					/>
				</a>
			</div>
        </>
    );
}

export default Logo1;
