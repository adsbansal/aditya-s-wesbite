
function Header() {
    return (
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="hidden lg:block">
                <ul className="inline-flex">
                    <li><a className="px-4 font-bold" href="/">Home</a></li>
                    <li><a className="px-4 hover:text-gray-800" href="#">About</a></li>
                    <li><a className="px-4 hover:text-gray-800" href="#">Contact</a></li>
                </ul>
            </div>
      </div>
    );
}

export default Header;



