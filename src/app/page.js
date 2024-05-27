import Navbar from "./common/Navbar";
import BackgroundVideo from './components/home/BackgroundVideo';
import Hero_Content from './components/home/Hero_Content';
import About from './components/home/About';
import Volunteer from './components/home/Volunteer';
import Help from './components/home/Help';
import Testimonials from './components/home/Testimonials';
import Footer from "./common/Footer";

export default function Home() {
	return (
		<>
			<main className=" flex flex-col">
				{/* ------ Landing Page ------ */}

				<section id="landing_page" className="h-[100dvh]">
					<BackgroundVideo />
					<section id="navbar" className="z-100">
						<Navbar />
					</section>
					<Hero_Content />
				</section>

				{/* ------ About ------ */}
				<section id="about" className="overflow-x-hidden">
					<About/>
				</section>

				{/* ------ Volunteer ------ */}
				<section id="volunteer" className="overflow-x-hidden">
				 	<Volunteer/>
				</section>

				{/* ------ Help ------ */}
				<section id="help" className="overflow-x-hidden">
				 	<Help/>
				</section>

				{/* ------ Testimonials ------ */}
				<section id="testimonials" className="overflow-x-hidden">
				 	<Testimonials/>
				</section>

				{/* ------ Footer ------ */}
				<section id="footer" className="overflow-x-hidden">
				 	<Footer/>
				</section>
				
			</main>
		</>
	);
}
