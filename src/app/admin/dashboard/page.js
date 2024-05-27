import Footer from "../../common/Footer";
import Dashboard_Content from "../../components/admin/donors"
export default function Dashboard()
{
    return (
        <>
			<main className=" flex flex-col scroll-smooth bg-white">
                {/* Footer */}
                <section id="content" className="h-auto">
                    <Dashboard_Content/>
                </section>

                {/* Footer */}
                <section id="footer">
                    <Footer/>
                </section>
            </main>

        </>
    );
}