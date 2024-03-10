import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { aboutSlider } from "../constants";

const AboutSlider = () => {
    const [getWindow, setGetWindow] = useState<number>(window.innerWidth);

    const handleResize = () => {
        setGetWindow(window.innerWidth);
    };

    const isSmallScreen = getWindow <= 600;

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="py-12 px-4">
            <div className="">
                <Swiper
                    effect={"fade"}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false
                    }}
                    modules={[EffectFade, Pagination, Navigation, Autoplay]}
                    slidesPerView={3}
                    className={`mySwiper-kal h-full border-[8px]  border-sky-600 rounded-2xl overflow-hidden`}
                    style={{
                        "--swiper-navigation-size": "10px",
                        width: isSmallScreen
                            ? `${getWindow - 30}px`
                            : getWindow > 980
                            ? `${600}px`
                            : `${getWindow - getWindow / 2 - 30}px`
                    }}
                >
                    {aboutSlider.map(slide => (
                        <SwiperSlide key={slide} className="h-full">
                            <img
                                src={slide}
                                alt={slide}
                                className="h-[400px] w-full  m-0"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutSlider;
