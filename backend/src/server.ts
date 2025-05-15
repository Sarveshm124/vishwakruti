import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import contactRoutes from './routes/contactRoutes';

// Load environment variables
dotenv.config();

// Connect to SQLite database
connectDB();

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

// CORS: Allow frontend to access backend
app.use(cors({
  origin: CLIENT_ORIGIN,
  credentials: true,
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Accessible from: ${CLIENT_ORIGIN}`);
});
