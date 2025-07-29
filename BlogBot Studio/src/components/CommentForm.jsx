import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = ({blogId}) => {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

   

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`/api/blog/${blogId}/comments`, { author, content: text });
      console.log('Comment submitted:', response.data)
      setAuthor('');
       setText('');
    } catch (error) {
      console.error('Error submitting comment:', error.response?.status)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your Name"
        required
        />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your comment..."
      />
      <button type="submit">Post Comment</button>
    </form>
  )
}

export default CommentForm