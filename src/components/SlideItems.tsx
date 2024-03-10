import { SwiperSlide } from "swiper/react";
import { heroText } from "../constants";

import SlideItem from "./SlideItem";


const SlideItems = () => heroText.map((slide, i) => {
    return (
        <SwiperSlide
            key={slide.heading}
            className="w-full h-full">
            <SlideItem {...slide} />
        </SwiperSlide>
    );
})


export default SlideItems