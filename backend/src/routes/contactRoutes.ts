import { Router } from 'express';
import { sequelize } from '../config/db';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, phone, address, message } = req.body;
  
  try {
    const result = await sequelize.query(
      'INSERT INTO contact_us (name, email, phone, address, message) VALUES (?, ?, ?, ?, ?)', 
      {
        replacements: [name, email, phone, address, message],
      }
    );
    res.status(200).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Database error, please try again.' });
  }
});

export default router;
