import { service } from "../constants";

const Services = () => {
    return (
        <div className="w-full p-3 lg:p-10">
            <div className="py-10 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-semibold leading-snug capitalize">
                    {" "}
                    WHY CHOOSE OUR PRODUCTS
                </h2>
                <div className="h-2 w-20 animate-ping bg-yellow-400" />
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                {service.map((item, i) => (
                    <div
                        className="p-5 py-16 rounded-lg bg-yellow-100"
                        key={item.title}
                    >
                        <h3 className="text-2xl">{item.title}</h3>
                        <p >{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
