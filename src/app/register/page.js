import Navbar from "../common/navbar";
import { Footer } from "../common/footer";
import RegisterBackground from "../components/register/background";
import RegisterContent from "../components/register/content";

export default function Donate()
{
    return (
        <>
			<main className=" flex flex-col scroll-smooth">
                <RegisterBackground/>

                {/* Navbar */}
                <section id="navbar" className="h-[20dvh] z-10">
                    <Navbar/>
                </section>

                {/* Content */}
                <section id="content">
                    <RegisterContent/>
                </section>

                {/* Footer */}
                <section id="footer">
                    <Footer/>
                </section>
            </main>
        
        </>
        
    );
}