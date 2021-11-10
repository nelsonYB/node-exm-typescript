import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_user: string = process.env.DB_USERNAME || 'user';
const db_password: string = process.env.DB_PASSWORD ?? "";

const db = new Sequelize('node', db_user, db_password, {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;