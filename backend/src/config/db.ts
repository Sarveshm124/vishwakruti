import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

// Ensure the database directory exists
const dbDir = path.join(__dirname, '../../');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create a SQLite database connection
const dbPath = path.join(dbDir, 'contact_db.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false, // Set to true if you want to debug SQL
});

const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('✅ SQLite database connected successfully');

    // Sync all models
    await sequelize.sync();
    console.log('✅ All models synchronized successfully');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
