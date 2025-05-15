import { Request, RequestHandler, Response } from 'express';
import Contact from '../models/Contact';

// Create a new contact form submission
export const createContact : RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      user,
      name,
      firstName,
      lastName,
      email,
      phone,
      address,
      message
    } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
      return;
    }

    // Save contact using Sequelize
    const contact = await Contact.create({
      user,
      name,
      firstName,
      lastName,
      email,
      phone,
      address,
      message
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// Get all contact form submissions
export const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not retrieve contacts.'
    });
  }
};
