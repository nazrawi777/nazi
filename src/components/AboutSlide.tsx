import Slider from "react-slick";

import { aboutSlider } from "../constants";

type Props = {}

const AboutSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-full">
            <Slider {...settings}>
                {
                    aboutSlider.map((slide, i) => {
                        return (
                            <div key={slide}>
                                <img src={slide}
                                    alt="slide image"
                                    className="object-cover border-emerald-900" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default AboutSlide