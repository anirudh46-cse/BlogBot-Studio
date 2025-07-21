import React, { useState } from 'react'
import axios from 'axios'

const CommentForm = ({blogId}) => {
  const [text, setText] = useState('')

   

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/blog/${id}/comments', { text })
      console.log('Comment submitted:', response.data)
    } catch (error) {
      console.error('Error submitting comment:', error.response?.status)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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