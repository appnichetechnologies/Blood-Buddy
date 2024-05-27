import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Donate_Main from "../components/donate/content";

export default function Donate()
{
    return (
        <>
			<main className="bg-slate-200 flex flex-col scroll-smooth">
            {/* <DonateBackground/> */}

                {/* Navbar */}
                <section id="navbar" className="h-[20dvh] z-10">
                    <Navbar/>
                </section>

                <section id="content">
                    <Donate_Main/>
                </section>

                {/* Footer */}
                <section id="footer">
                    <Footer/>
                </section>
            </main>
        
        </>
        
    );
}