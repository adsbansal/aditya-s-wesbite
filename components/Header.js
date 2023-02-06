import { useState } from "react";

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
        <div className="container mx-auto py-4">

            {/* for small screens - xmd:850px */}
            <div className="xmd:hidden"> 
                <div className="overlay" id="myNav">
                    <a href="javascript:void(0)" id="theClose" className="closebtn easeinout" onClick={OpenSidebar}>
                    &times;
                    </a>

                    <div className="overlay-content">
                    <a href="/">home</a>
                    <a href="/">work</a>
                    <a href="/">words</a>
                    </div>
                </div>

                <span onClick={OpenSidebar} style={{ cursor: "pointer" }}>
                    <button class="w-4 h-4 rounded-full flex-grow
                            bg-indigo-400 hover:bg-indigo-200">
                    </button>
                </span>
            </div>

            {/* for large screens */}
            <div className="hidden xmd:block">
                <div className="flex justify-center">
                    <ul className="inline-flex text-slate-300">
                        <li className="px-1">
                            <button className="px-4 bg-tranparent border border-transparent hover:border-black rounded-full transition duration-500 ease-in-out" href="/">
                                home
                            </button>
                        </li>
                        <li className="px-1">
                            <button className="px-4 bg-tranparent border border-transparent hover:border-black rounded-full transition duration-500 ease-in-out" href="#">
                                work
                            </button>
                        </li>
                        <li className="px-1">
                            <button className="px-4 bg-tranparent border border-transparent hover:border-black rounded-full transition duration-500 ease-in-out" href="#">
                                words
                            </button>
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



