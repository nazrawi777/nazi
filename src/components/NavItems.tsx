
const NavItems = () => {
    return (
        <div className=" naxi flex flex-col gap-2 h-full items-center justify-around  ">
            <div className="nu pl-44 flex items-center gap-0 font-serif text-sm pt-10">
                {["POWER", "SPEED", "TRUST"].map(element => (
                    <div key={element} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white " />
                        {element}
                    </div>
                ))}
            </div>
            <div className=" nv flex items-center justify-center pl-44 ">
                <p className=" font-serif text-md font-medium leading-tight text-blue-500 text-center uppercase px-40">
                    always the real things always <br /> limitless Engineering
                </p>
            </div>
            <div className="addbar"></div>
        </div>
    );
};

export default NavItems;
