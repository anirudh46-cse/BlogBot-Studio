import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminComment = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/comments'); 
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error('Failed to fetch comments');
      console.error(' AdminComment error:', error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">🗨️ All Comments</h2>
      {comments.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment._id} className="border p-4 rounded-md">
              <p><strong>Author:</strong> {comment.author || 'Anonymous'}</p>
              <p><strong>Content:</strong> {comment.content}</p>
              <p className="text-sm text-gray-500">Blog ID: {comment.blogId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminComment;