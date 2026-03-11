import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Latest Blog Posts</h1>
          <Link
            to="/create"
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-purple-600 hover:text-white transition font-medium"
          >
            Create Blog
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition border border-gray-200"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="font-medium text-green-700">{blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="block w-full text-center px-4 py-2 bg-yellow-500 text-black rounded hover:bg-purple-600 hover:text-white transition font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
