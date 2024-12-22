// components/Navbar.js
export default function Navbar() {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-md rounded-lg z-50 px-6 py-3 w-[90%] md:w-auto flex items-center justify-between">
        <div className="text-lg font-bold text-purple-800">R. P. Shaha University</div>
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><a href="#admissions" className="hover:text-purple-600">Admissions</a></li>
          <li><a href="#erp" className="hover:text-purple-600">ERP</a></li>
          <li><a href="#research" className="hover:text-purple-600">Research</a></li>
          <li><a href="#news" className="hover:text-purple-600">News & Events</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
        </ul>
        <button className="block md:hidden text-purple-800 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    );
  }
  