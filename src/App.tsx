import { Navbar } from "./components";
import Products from "./components/Products";
import Service from "./components/service/Service";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";
import MaxWidthWapper from "./hoc/MaxWidthWrapper";
import About from "./sections/About";
import Slider from "./sections/Slider";


const App = () => {
    return (
        <main id="Home" className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">
                <MaxWidthWapper className="h-dvh w-full px-0">
                    <div className="text-center flex flex-col items-stretch w-full h-full pt-12">
                        <div >
                            <Slider />
                        </div>
                        <div id="About us">
                            <About />
                        </div>
                        <div id="Our Services">
                            <Service />
                        </div>
                        <div id="Product">
                            <Products />
                        </div>
                        <div id="Contact Us">
                            <Contact />
                            <Footer />
                        </div>
                    </div>
                </MaxWidthWapper>
            </div>
        </main>
    );
};

export default App;
