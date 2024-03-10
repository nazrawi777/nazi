import {
    Image,
    Image2,
    slide,
    slide2,
    slide3,
    slide4,
    Img1,
    Img2,
    Img3,
    product,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15

} from "../assets";

export const NAV_ITEM = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "product & application",
        link: "/product"
    },
    {
        title: "Contact",
        link: "/contact"
    }
];

export const heroText = [
    {
        heading: "Devoted and enthusiastic in serving our valued clients with passion",
        body: "Dedicated to prioritizing customer needs and consistently striving to surpass their expectations.",
        bgImage: Image
    },
    {
        heading: "All-encompassing Solutions Catering to Every Pump Need",
        body: "We offer globally renowned water pump and electromechanical products, backed by exceptional after-sales service.",
        bgImage: Image2
    }
];

export const aboutSlider = [Img1, Img2, Img3];

export const products = [
    {
        img: product,
        title: "1",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product1",
            model: "BF-C40 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "44KVA kVA" },
                        { label: "PRP (Prime Power)", value: "40 kVA" },
                        { label: "ENGINE", value: " DCEC Cummins, 4BT3.9-G1" },
                        { label: "ALTERNATOR", value: "LEROY SOMER, TAL-A42-E" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " DCEC Cummins 4BT3.9-G1" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },
    },
    {
        img: product2,
        title: "2",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "Product2",
            model: "BF-C110 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "110 kVA" },
                        { label: "PRP (Prime Power)", value: "100 kVA" },
                        { label: "ENGINE", value: "DCEC Cummins,6BT5.9-G2" },
                        { label: "ALTERNATOR", value: "LEROY SOMER,TAL-A44-D" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " DCEC Cummins 6BT5.9-G2" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "Alternator", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },
    },
    {
        img: product3,
        title: "3",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "Product 3",
            model: "BF-C110 400V | 1500rpm | 50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "110 kVA" },
                        { label: "PRP (Prime Power)", value: "100 kVA" },
                        { label: "ENGINE", value: " DCEC Cummins,6BT5.9-G2" },
                        { label: "ALTERNATOR", value: "LEROY SOMER ,TAL-A44-D" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "DCEC Cummins 6BT5.9-G2" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },
    },
    {
        img: product4,
        title: "4",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "Product 4",
            model: "BF-P34 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "33 kVA" },
                        { label: "PRP (Prime Power)", value: "30 kVA" },
                        { label: "ENGINE", value: "Perkins,1103A-33G" },
                        { label: "ALTERNATOR", value: "STAMFORD,S0L2-P1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "Perkins 1103A-33G" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },
    },
    {
        img: product5,
        title: "5",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product 5",
            model: "BF-C90 400V | 1500rpm | 50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "90 kVA" },
                        { label: "PRP (Prime Power)", value: "80 kVA" },
                        { label: "ENGINE", value: "DCEC Cummins,4BTA3.9-G11" },
                        { label: "ALTERNATOR", value: "LEROY SOMER,TAL-A44-C" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " DCEC Cummins 4BTA3.9-G11" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },

    {
        img: product6,
        title: "6",
        detail: "",
        data: {
            title: "product 6",
            model: "BF-P50 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "50 kVA" },
                        { label: "PRP (Prime Power)", value: "45 kVA" },
                        { label: "ENGINE", value: "Perkins,1103A-33TG1" },
                        { label: "ALTERNATOR", value: "STAMFORD,S1L2-N1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "  Perkins 1103A-33TG1" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },

    {
        img: product7,
        title: "7",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product 7",
            model: "BF-P110 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "110 kVA" },
                        { label: "PRP (Prime Power)", value: "100 kVA" },
                        { label: "ENGINE", value: "Perkins,1104C-44TAG2" },
                        { label: "ALTERNATOR", value: "STAMFORD, UCI274C1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " Perkins 1104C-44TAG2" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },
    {
        img: product8,
        title: "8",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product8",
            model: "BF-P88 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "88 kVA" },
                        { label: "PRP (Prime Power)", value: "80 kVA" },
                        { label: "ENGINE", value: " Perkins,1104A-44TG2 " },
                        { label: "ALTERNATOR", value: "STAMFORD,UCI224G1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " Perkins 1104A-44TG2" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },
    {
        img: product9,
        title: "9",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
        title: "product9",
            model: "BF-P165 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "165 kVA" },
                        { label: "PRP (Prime Power)", value: "150 kVA" },
                        { label: "ENGINE", value: " Perkins,1106A-70TAG2" },
                        { label: "ALTERNATOR", value: " STAMFORD,UCI274F1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "  Perkins 1106A-70TAG2 " }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },
    {
        img: product10,
        title: "10",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product 10",
            model: "BF-P220 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "220 kVA" },
                        { label: "PRP (Prime Power)", value: "200 kVA" },
                        { label: "ENGINE", value: "Perkins,1106A-70TAG4" },
                        { label: "ALTERNATOR", value: "STAMFORD,UCI274H1" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "  Perkins 1106A-70TAG" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },

    {
        img: product15,
        title: "10",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product 10",
            model: "160kw 200kva soundproof",
            features: [
                
                
            ],
        },

    },
    {
        img: product11,
        title: "12",
        detail: "160kw 200kva soundproof",
        data: {
            
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "330 kVA" },
                        { label: "PRP (Prime Power)", value: "300 kVA" },
                        { label: "ENGINE", value: " Perkins,1506A-E88TAG5" },
                        { label: "ALTERNATOR", value: " STAMFORD,S4L1D-D41" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: " DCEC Cummins 4BTA3.9-G11" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },
    {
        img: product12,
        title: "13",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product 13",
            model: "BF-C90 400V | 1500rpm | 50Hz",
            features: [
                
                
                {
                    title: "Features",
                    items: [
                        { label: "", value: "TOP Grade, Rust free Stainless Steel Hardwares" },
                        { label: "", value: "FULL Stainless Steel Body" },
                        { label: "Horsepower", value: "1 Hp, Type : Oil Filled (Food Grade), with Wire & Digital Control Panel" },
                        { label: "", value: "Designed for Wide-Voltage fluctuations( 160 - 240v ) ; Dynamically Balanced Rotor" },
                        { label: "", value: "Anti-friction ball bearings with Lifelong Lubrication" },
                        { label: "", value: " NRV to avoid Return Flow. Housing the trust of CRIr" },
            
                    ],
                },
            ],
        },

    },
    {
        img: product13,
        title: "14",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product13",
            model: "BF-P400 400V|1500rpm|50Hz",
            features: [
                {
                    title: "General features",
                    items: [
                        { label: "ESP (Standby Power)", value: "400 kVA" },
                        { label: "PRP (Prime Power)", value: "350 kVA" },
                        { label: "ENGINE", value: "Perkins,2206C-E13TAG2" },
                        { label: "ALTERNATOR", value: "STAMFORD,S4L1D-E4" },
                    ],
                },
                {
                    title: "Engine",
                    items: [{ label: "", value: "Perkins 2206C-E13TAG2" }],
                },
                {
                    title: "Additional Features",
                    items: [
                        { label: "", value: "Single bearing, IP23, insulation class H" },
                        { label: "", value: "50℃ radiator, fans driven by belt, with safety guard" },
                        { label: "", value: "Dry type air filter, fuel filter & oil filter" },
                        { label: "", value: "Vibration damper" },
                        { label: "", value: "Standard control panel" },
                        { label: "", value: "24V charging alternator" },
                        { label: "", value: "Exhaust bellows, elbows, flange & muffler" },
                        { label: "", value: "Lead-acid batteries, rack and cables" },
                        { label: "", value: "User manual" },
                    ],
                },
            ],
        },

    },
    {
        img: product14,
        title: "15",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        data: {
            title: "product14",
           
            features: [
                
                
                {
                    title: "Features",
                    items: [
                        { label: "Model", value: "TPM63HE" },
                        { label: "Rated power", value: "50KW/63KVA" },
                        { label: "Standby power", value: "55KW/68.75KVA" },
                        { label: "Rated voltage", value: "400V (Can be adjusted)" },
                        { label: "Rated frequency", value: "50HZ" },
                        { label: "Dimension", value: "1660x800x1470 MM" },
                        { label: "Weight", value: "960KG" },
                        { label: "Brand", value: "Perkins" },
                        { label: "Model", value: "4.4TGM" },
                        { label: "Speed governor", value: "Electric" },
                
                    ],
                },
            ],
        },

    },
    
    
];


export const service = [
    {
        title: "Price",
        body: "we constantly strive to offer items at fair prices."
    },
    {
        title: "Trust & Reliability",
        body: "we constantly strive to offer items at fair prices."
    },
    {
        title: "Post-Purchase Care",
        body: "We provide comprehensive post- purchase support, including warranties, ensuring customer satisfaction long after the sal"
    },
    {
        title: "Original Spare Parts",
        body: "We keep a stock of authentic components and accessories for all our products, ensuring continued functionality and performance"
    }
];
