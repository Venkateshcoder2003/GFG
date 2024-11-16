import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, Users, Calendar, LogOut } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    return (
        <nav className="bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <Code2 className="h-8 w-8" />
                            <span className="font-bold text-xl">GeeksForGeeks Club</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/events"
                            className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <Calendar className="inline-block h-5 w-5 mr-1" />
                            Events
                        </Link>
                        <Link
                            to="/alumni"
                            className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            <Users className="inline-block h-5 w-5 mr-1" />
                            Alumni
                        </Link>

                        {isAuthenticated ? (
                            <>
                                {(userRole === 'coordinator' || userRole === 'chairman') && (
                                    <Link
                                        to="/manage-events"
                                        className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Manage Events
                                    </Link>
                                )}
                                {userRole === 'chairman' && (
                                    <Link
                                        to="/admin"
                                        className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Admin Dashboard
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                                >
                                    <LogOut className="h-5 w-5 mr-1" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-white text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;