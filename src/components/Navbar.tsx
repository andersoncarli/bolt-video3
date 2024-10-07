import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Video, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Video className="mr-2" />
          <span className="font-bold text-xl">VideoLib</span>
        </Link>
        <div>
          {user ? (
            <div className="flex items-center">
              <Link to="/profile" className="mr-4">
                <User className="inline-block" />
              </Link>
              <button onClick={logout} className="btn btn-primary">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;