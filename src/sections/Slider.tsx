import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import SlideItems from "../components/SlideItems";
import { heroText } from "../constants";
import SlideItem from "../components/SlideItem";






const Slider = () => {

    return (
        <div className="flex flex-col items-center">
            <Swiper
                style={{

                }}
                effect={'fade'}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                className={`mySwiper w-full`}
            >
                {
                    heroText.map((slide, i) => {
                        return (
                            <SwiperSlide
                                key={slide.heading}
                            >
                                <SlideItem {...slide} />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};

export default Slider;


/*
<motion.img
                               initial={animation.init}
                               whileInView={animation.zoomAnimation}
                               viewport={{ once: true, amount: 0.5 }}
                               src={slide.bgImage}
                               alt="Slider image"
                               className="bg-cover bg-bottom w-full"
                           /> */