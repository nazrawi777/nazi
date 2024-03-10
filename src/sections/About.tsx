import AboutSlider from "../components/AboutSlider";
import "react-multi-carousel/lib/styles.css";


const About = () => {
    return (
        <div className=" eda flex flex-col w-full py-8 ">
            <div className="py-10 flex flex-col justify-center items-center ">
                <h2 className="text-5xl font-semibold leading-snug capitalize text-[rgb(53,141,246)] roman">
                    About us
                </h2>
                <div className="h-2 w-20 animate-ping bg-gray-700" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center px-10 ">
                <div className="flex-1">
                    <div className="w-full h-full">
                        <h3 className="text-2xl sm:text-center w-full font-semibold leading-snug capitalize mb-4 mr-40 text-[rgb(53,141,246)]">
                            LIMITLESS ENGINEERING
                        </h3>
                        <p className="w-full text-sm sm:text-lg leading-normal mr-40 font-h text-[rgb(27,26,26)]">
                            Limitless Engineering PLC stands <br className="sm:inline" /> proudly in
                            Addis Ababa, Ethiopia <br className="sm:inline" /> as a registered private
                            entity. We are <br className="sm:inline" /> your premier destination for a
                            <br className="sm:inline" /> diverse range of offerings, including <br className="sm:inline" />
                            pumps, generators, and cutting-edge <br className="sm:inline" />
                            electro-mechanical solutions. Our <br className="sm:inline" /> commitment
                            extends beyond mere <br className="sm:inline" /> transactions; we deliver
                            exceptional <br className="sm:inline" /> service with products readily
                            <br className="sm:inline" /> available from our stock or through <br />
                            swift delivery systems
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-center">
                        <AboutSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
