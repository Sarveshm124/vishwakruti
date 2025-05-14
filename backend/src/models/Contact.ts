// src/models/Contact.ts

import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface ContactAttributes {
  id: number;
  user: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ContactCreationAttributes extends Optional<
  ContactAttributes,
  'id' | 'phone' | 'address' | 'createdAt' | 'updatedAt'
> {}

class Contact extends Model<ContactAttributes, ContactCreationAttributes>
  implements ContactAttributes {
  public id!: number;
  public user!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phone?: string;
  public address?: string;
  public message!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts',
    timestamps: true,
  }
);

export default Contact;
