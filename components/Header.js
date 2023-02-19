import { useState } from "react";
import UseAnimations from "react-useanimations";
import explore from "react-useanimations/lib/explore";
import Link from "next/link";

function Header() {
    const [open, setOpen] = useState(false);

    const OpenSidebar = (e) => {
        e.preventDefault()
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

    const OpenSidebarforlink = (e) => {
        // e.preventDefault()
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
                    <a href="" id="theClose" className="closebtn easeinout" onClick={OpenSidebar}>
                    &times;
                    </a>
                    
                    <div className="overlay-content">
                        <Link href="/"><a className="easeinout" onClick={OpenSidebarforlink}>home</a></Link>
                        <Link href="/work"><a id="theClose" className="easeinout" onClick={OpenSidebarforlink}>work</a></Link>
                        <Link href="/words"><a id="theClose" className="easeinout" onClick={OpenSidebarforlink}>words</a></Link>
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
                            <Link href="/">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    home
                                </button>
                            </Link>
                        </li>
                        <li className="px-1">
                            <Link href="/work">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    work
                                </button>
                            </Link>
                        </li>
                        <li className="px-1">
                            <Link href="/words">
                                <button className="px-4 bg-tranparent border border-transparent hover:border-slate-500 rounded-full transition duration-500 ease-in-out">
                                    words
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
    );
}

export default Header;



