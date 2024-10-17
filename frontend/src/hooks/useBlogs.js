import { useContext } from 'react';
import { BlogContext } from '../contexts/BlogContext'; // Adjust the import path as needed

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error('useBlogs must be used within a BlogProvider');
  }

  return context;
};
