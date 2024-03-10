import { useRef } from "react";
import "./service.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "price",
        img: "https://i.ebayimg.com/images/g/bDEAAOSw5Mxkdjn4/s-l1600.png",
        desc: "We constantley strive to offer items at fair prices"
    },
    {
        id: 2,
        title: "Trust",
        img: "https://i.ebayimg.com/images/g/Hk8AAOSwMuNkyC8i/s-l960.jpg",
        desc: "We prioritize your trust – We're the bedrock of reliability, ensuring your journey with us is built on unwavering confidence and transparency."
    },
    {
        id: 3,
        title: "Reliability",
        img: "https://c8.alamy.com/comp/T5BF5R/blue-electric-water-pump-3d-illustration-T5BF5R.jpg",
        desc: "We stand as your unwavering partner – where we embody reliability, ensuring your every need is met with steadfast commitment and excellence"
    },
    {
        id: 4,
        title: "Original Spare Parts",
        img: "https://i.ebayimg.com/images/g/KCwAAOSw84lku2hv/s-l1600.png",
        desc: "We prioritize your vehicle's reliability with authentic quality – We supply only genuine spare parts for optimal performance and longevity."
    }
];

const Single = ({ item }: { item: (typeof items)[0] }) => {
    const ref = useRef<HTMLDivElement>();

    const { scrollYProgress } = useScroll({
        target: ref
        // offset: ["start start",  "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section>
            <div className="container py-4">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div
                        className="textContainer text-left"
                        style={{ y }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Product</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const ref = useRef<HTMLDivElement>();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });

    return (
        <div className="services bg-[#0c0c1d] text-white" ref={ref}>
            <div className="progress my-4">
                <h1>WHY CHOOSE OUR PRODUCTS</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar"
                ></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Services;
