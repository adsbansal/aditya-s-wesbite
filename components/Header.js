
function Header() {
    return (
        <div className="container mx-auto py-4">
            <div className="md:hidden"> 
                hei
            </div>

            {/* for large screens */}
            <div className="hidden md:block">
                <div className="flex justify-center">
                    <ul className="inline-flex">
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



