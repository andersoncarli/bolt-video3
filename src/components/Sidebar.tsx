import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Upload, LogIn, UserPlus, Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-10`}>
        <nav>
          <Link to="/" className="sidebar-link">
            <Home className="inline-block mr-2" size={20} />
            Home
          </Link>
          <Link to="/upload" className="sidebar-link">
            <Upload className="inline-block mr-2" size={20} />
            Upload Video
          </Link>
          <Link to="/login" className="sidebar-link">
            <LogIn className="inline-block mr-2" size={20} />
            Login
          </Link>
          <Link to="/register" className="sidebar-link">
            <UserPlus className="inline-block mr-2" size={20} />
            Register
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;