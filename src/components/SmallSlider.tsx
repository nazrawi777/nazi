import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { aboutSlider } from "../constants";

const SmallSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="w-[10%] flex p-0 ">
            <Carousel responsive={responsive} className="w-full border-2 m-0 p-0 border-blue-700">
                {
                    aboutSlider.map((slide) =>
                    (
                        <div className="w-full m-0 p-0">
                            <img
                                src={slide}
                                alt="image"
                                className="h-[400px] w-full border-2 m-0 rounded-xl"
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default SmallSlider