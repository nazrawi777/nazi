import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from "../constants";

const Products = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 664, min: 401 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 2
        }
    };

    return (
        <div className="w-full p-5 px-5 bg-[rgb(246,242,242)]">
            <div className="py-5 mb-4 border-y-4 border-gray-900 flex flex-col justify-center items-start">
                <h2 className="text-5xl font-semibold leading-snug capitalize">
                    Our products
                </h2>
            </div>
            <Carousel
                responsive={responsive}
                arrows={true}
                autoPlaySpeed={2000}
                autoPlay={true}
                infinite={true} >
                {products.map(slide => (
                    <div key={slide.title} className="w-full mx-5 relative group">
                        <img
                            src={slide.img}
                            alt="slide image"
                            className="h-[400px] max-w-full border-r-[4px] border-[#4b4545] rounded-xl relative"
                        />
                        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 mt-2 group-hover:invisible transition-all ease-in duration-150">
                            <h5 className="sm:text-lg text-2xl font-bold ">
                                {slide.title}
                            </h5>
                            <button className="bg-[rgb(53,141,246)] py-1.5 px-2 rounded-xl">
                                see details
                            </button>
                        </div>
                        <div className="absolute inset-x-0 -bottom-10 rounded-xl pointer-events-none opacity-0 group-hover:opacity-80 group-hover:bottom-0 transition-all ease-in duration-200 backdrop-blur-lg h-full flex justify-center items-center">
                            <div className="absolute inset-0 px-6 py-4 flex flex-col justify-center text-white rounded-xl  bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-100">
                                <h3 className="sm:text-base lg:text-xl font-bold">{slide.data?.title}</h3>
                                <p className="text-sm mt-2">{slide.data.model}</p>
                                <ul className="list-none mt-4 space-y-2 text-sm">
                                    {slide.data.features.map((featureGroup) => (
                                        <li key={featureGroup.title}>
                                            {featureGroup.title ? (
                                                <span className="font-medium text-base">{featureGroup.title}</span>
                                            ) : null}
                                            <ul className="list-none px-2 ml-2">
                                                {featureGroup.items.map((item) => (
                                                    <li key={item.label}>{item.value}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};





export default Products;
