import { useState } from "react";
import UseAnimations from "react-useanimations";
import explore from "react-useanimations/lib/explore";

function Header() {
    const [open, setOpen] = useState(false);

    const OpenSidebar = (e) => {
        const sidebar = document.getElementById("myNav");
        const close = document.getElementById("theClose");


        if (open) {
        sidebar.style.width = "0%";
        close.style.opacity = "0%";
        setOpen(false);
        } else {
        sidebar.style.width = "100%";
        close.style.opacity = "100%";
        setOpen(true);
        }
    };

    return (
        <div className="container mx-auto pt-4 pb-2">

            {/* for small screens - xmd:850px */}
            <div className="xmd:hidden"> 
                <div className="overlay" id="myNav">
                    <a href="javascript:void(0)" id="theClose" className="closebtn easeinout" onClick={OpenSidebar}>
                    &times;
                    </a>

                    <div className="overlay-content">
                    <a href="/">home</a>
                    <a href="/work">work</a>
                    <a href="/words">words</a>
                    </div>
                </div>

                <span onClick={OpenSidebar} style={{ cursor: "pointer" }}>
                    <div className="social-icons">
                        <UseAnimations animation={explore} strokeColor={"white"} speed={1} size={35} />
                    </div>
                </span>
            </div>

            {/* for large screens */}
            <div className="hidden xmd:block">
                <div className="flex justify-center">
                    <ul className="inline-flex text-slate-500">
                        <li className="px-1">
                            <a href="/">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    home
                                </button>
                            </a>
                        </li>
                        <li className="px-1">
                            <a href="/work">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    work
                                </button>
                            </a>
                        </li>
                        <li className="px-1">
                            <a href="/words">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    words
                                </button>
                            </a>
                        </li>
{/*                         
                        <li><a className="px-5 hover:text-green-500" href="/">home</a></li>
                        <li><a className="px-5 hover:text-gray-800" href="#">work</a></li>
                        <li><a className="px-5 hover:text-gray-800" href="#">words</a></li> */}
                    </ul>
                </div>
            </div>
      </div>
    );
}

export default Header;



