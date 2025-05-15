import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

// Define the Contact attributes
interface ContactAttributes {
  id: number;
  user: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  address?: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional attributes for creation
interface ContactCreationAttributes extends Optional<ContactAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Define the Contact model
class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
  public id!: number;
  public user!: string;
  public name!: string;
  public firstName?: string;
  public lastName?: string;
  public email!: string;
  public phone?: string;
  public address?: string;
  public message!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
    timestamps: true,
  }
);

export default Contact;
