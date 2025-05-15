import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

// Optional: Rename db to reflect frontend context
const dbPath = path.resolve(__dirname, '..', 'contact_db.sqlite');

const dir = path.dirname(dbPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
});

const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('SQLite Database connected successfully');
    await sequelize.sync(); // Ensure models are created
    console.log('All models were synchronized successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
