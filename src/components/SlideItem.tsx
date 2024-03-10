import { motion } from "framer-motion";

import { minLogo } from "../assets";
import {
    fadeIn,
    staggerContainer,
    sliderVariants,
    sliderVariants2
} from "../util/motion";

interface sliderItemProps {
    bgImage: string;
    heading: string;
    body: string;
}

const SlideItem = ({ bgImage, heading, body }: sliderItemProps) => {
    return (
        <div className="w-full h-full">
            <motion.div
                className="w-full h-[150px] sm:h-[230px] md:h-[540px] bg-cover bg-center bg-no-repeat border sm:relative"
                style={{ backgroundImage: `url('${bgImage}')` }}
                variants={sliderVariants2}
                initial="hidden"
                whileInView="show"
            >
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="bg-white/60 w-[70%] max-w-3xl pl-[10px] mt-3 sm:mt-10 ml-[8%]"
                >
                    <div className="flex flex-col gap-0.5 sm:gap-5 p-1 sm:p-5">
                        <motion.div
                            variants={fadeIn("down", "spring", 1.2, 1) as any}
                            className="flex items-center gap-2"
                        >
                        </motion.div>
                        <motion.div className="lg:mt-5">
                            <motion.h2
                                variants={
                                    fadeIn("down", "spring", 1.2, 1.8) as any
                                }
                                className="text-[0.5rem] sm:text-[0.8rem] md:text-4xl font-bold text-left lg:text-[3.9rem] capitalize md:leading-tight text-black md:font-medium"
                            >
                                {heading}
                            </motion.h2>
                            <motion.p
                                variants={
                                    fadeIn("right", "tween", 0.5, 1.2) as any
                                }
                                initial="hidden"
                                whileInView="show"
                                className="sm:mt-4 text-black text-left text-[5px] sm:text-[8px] md:text-lg font-medium max-w-2xl md:pr-8"
                            >
                                {body}
                            </motion.p>

                            <div className="mt-1 flex items-center">

                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SlideItem;
