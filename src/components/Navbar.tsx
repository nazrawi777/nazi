import { Logo } from "../assets";
import MaxWidthWapper from "../hoc/MaxWidthWrapper";
import NavItems from "./NavItems";
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="bg-[#0c0c1d] text-white h-16 sticky z-50 top-0 inset-x-0 ">
            <header className="relative">
                <MaxWidthWapper>
                    <div className=" nati  ">


                    
                        <div className="next flex h-28 items-center justify-between lg:justify-around  lg:px-0 ">
                            <div className="nice">
                                
                            </div>

                        <a href="/">
                                    {/* {ADD : logo} */}
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="w-32 h-25 mr-30 rounded-r-3xl "
                                    />
                                </a>{/* TODO : mobile menu */}

                            <div className="kal z-40">
                                <div className="brobar3">
                                
                                </div>
                            </div>

                            <div className="no1 hidden z-50 lg:ml-8 lg:block lg ">
                                <NavItems />
                            </div>

                            <div className="h-full flex items-center space-x-5">
                                
                                <div className="grid grid-cols-3 grid-rows-3 gap-1 py-5 ">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWapper>
            </header>
        </div>
    );
};

export default Navbar;
