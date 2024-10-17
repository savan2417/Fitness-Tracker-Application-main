import { createContext, useState, useEffect, useRef } from 'react';

const BlogContext = createContext();

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;

    const fetchBlogs = async () => {
      const requestOptions = {
        method: 'GET',
      };

      const params = {
        api_token: 'xiGOi13ZyO6vFu9aBOJS6JztPU5zKWDWQad3YxUL',
        categories: 'health,fitness',
        search: 'health + gym',
        limit: '3',
      };

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        .map((k) => esc(k) + '=' + esc(params[k]))
        .join('&');

      try {
        const response = await fetch(
          'https://api.thenewsapi.com/v1/news/all?' + query,
          requestOptions
        );
        const result = await response.json();
        setBlogs(result.data);
        isFetched.current = true;
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        // console.error('Error fetching blogs:', error);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext };
