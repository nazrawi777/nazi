import { delay, motion, useMotionValue } from "framer-motion"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Image, Image2 } from '../assets';

const Hero = () => {


    var settings = {
        //dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 1000,
        cssEase: "linear"

    };

    const imageVariants = {
        initial: {
            scale: 1,
        },
        zoomed: {
            scale: 1.5,
            transition: {

                duration: 1, // Adjust as needed
                ease: 'cubicBezier(0.25, 0.1, 0.25, 1)', // Smooth easing
                repeat: Infinity,
                repeatDelay: 0.1, // Small delay for smoother transitions
            },
        },
    };

    return (
        <div className='w-full h-full relative'>
            <Slider {...settings} >
                <div className='w-full h-[calc(h-vh_200px)] relative'>
                    <motion.img
                        src={Image}
                        alt="Slider image"
                        className='bg-cover w-full transition-all absolute inset-0 test'
                    />
                </div>
                <div className='w-full h-dvh relative '>
                    <img
                        src={Image2}
                        alt="Slider image"
                        className='bg-cover w-full animate-pulse test'
                    />
                </div>
                <div className='w-full h-[calc(h-vh_200px)] relative'>
                    <motion.img
                        src={Image}
                        alt="Slider image"
                        className='bg-cover w-full transition-all absolute inset-0 test'
                    />
                </div>
                <div className='w-full h-dvh relative '>
                    <img
                        src={Image2}
                        alt="Slider image"
                        className='bg-cover w-full animate-pulse test'
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Hero;
