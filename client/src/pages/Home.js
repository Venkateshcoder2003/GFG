import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Calendar, Users, Award } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Code2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
                            Welcome to GeeksForGeeks Club
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join our community of passionate developers and tech enthusiasts
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                            <Link
                                to="/events"
                                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
                            >
                                Upcoming Events
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Calendar className="h-12 w-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
                            <p className="text-gray-600">
                                Participate in workshops, hackathons, and tech talks
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Users className="h-12 w-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Strong Network</h3>
                            <p className="text-gray-600">
                                Connect with like-minded individuals and industry professionals
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <Award className="h-12 w-12 text-green-500 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                            <p className="text-gray-600">
                                Learn new technologies and enhance your coding skills
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}