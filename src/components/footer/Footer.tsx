import { PhoneCall, MapPin, Mails } from "lucide-react";
import { Logo, footImg } from "../../assets";

const Footer = () => {
    return (
        <footer className="nazi relative overflow-auto">
            <img
                src={footImg}
                alt="footer image"
                className="w-full bg-cover"
            />
            <div className="probar shadow-lg shadow-gray-800"></div>
            <div className="flex flex-col items-center justify-around py-8 md:flex-row md:justify-around md:py-10 shadow-lg shadow-cyan-500/50">
                {/* Contact */}
                <div className="flex items-center justify-center mb-4 md:mb-0">
                    <PhoneCall />
                    <div className="ml-2">
                        <span className="block">+251 911018896</span>
                        <span className="block">+251 900036566</span>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center justify-center mb-4 md:mb-0">
                    <MapPin />
                    <div className="ml-2">
                        <span>Welo sefer | Ethio-China Road</span>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center">
                    <Mails />
                    <div className="ml-2">
                        <span>limitlessengineeringethiopia@gmail.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
