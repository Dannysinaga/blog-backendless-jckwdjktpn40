import Navbar from '../components/Navbar';

export default function CreateBlog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Create New Blog Post</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition resize-none"
                placeholder="Enter a short description"
              />
            </div>

            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                id="author"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-2">
                Thumbnail Image
              </label>
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-green-700 file:text-white file:cursor-pointer hover:file:bg-green-800"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                rows={12}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent outline-none transition resize-none"
                placeholder="Write your blog content here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-purple-600 hover:text-white transition font-medium text-lg"
            >
              Submit Blog Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
