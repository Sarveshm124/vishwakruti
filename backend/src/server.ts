import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import contactRoutes from './routes/contactRoutes';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = parseInt(process.env.PORT || '8000', 10); // Convert to number

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
