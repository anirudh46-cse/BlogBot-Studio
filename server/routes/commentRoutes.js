import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('📝 Incoming comment body:', req.body);
    const { blogId, author, content } = req.body;
    console.log('➡️ blogId:', blogId);
    console.log('➡️ content:', content);
    console.log('➡️ author:', author);

    if (!blogId || !content) {
      console.log ('Missing blogId or content');
      return res.status(400).json({ error: 'Missing required fields' });

    }

    const newComment = new Comment({ blogId, author, content });
    await newComment.save();

    res.status(201).json({ message: 'Comment saved successfully' });
  } catch (error) {
    console.error('❌ Error saving comment:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;