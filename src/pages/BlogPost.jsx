// BlogPost.jsx
import React from 'react';
import CommentForm from '../components/CommentForm';

const BlogPost = ({ blog }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-700 mb-6">{blog.content}</p>
        <CommentForm blogId={blog._id} />
      </div>
    </div>
  );
};

export default BlogPost;