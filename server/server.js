import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogroutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();

// Core Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/blog/comments', commentRoutes);


// Routes
app.get('/', (req, res) => res.send("🚀 BlogBot Studio API is up and running"));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Server Initialization
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to database:", error.message);
    process.exit(1); // Exit on DB failure
  }
};

startServer();

export default app;