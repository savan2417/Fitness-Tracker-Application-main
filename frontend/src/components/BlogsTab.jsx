import { useBlogs } from '../hooks/useBlogs';

const BlogsTab = () => {
  const { blogs, loading, error } = useBlogs();

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col sm:flex-row items-start bg-white dark:bg-gray-800 p-3 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                {blog.image_url && (
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full sm:w-48 h-48 object-cover rounded-md"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                )}
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="font-semibold text-lg">{blog.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {blog.description}
                </p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-2"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsTab;
