import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog not found</h2>
          <Link to="/" className="text-green-700 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-700 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <span className="font-medium text-green-700">By {blog.author}</span>
              <span>{new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
              {blog.description}
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
