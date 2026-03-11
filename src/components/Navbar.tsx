import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <BookOpen className="w-8 h-8 text-green-700" />
            <span className="text-xl font-bold">BlogHub</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Create
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-purple-600 hover:text-white transition font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
