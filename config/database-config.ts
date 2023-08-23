import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export const PG_HOST = process.env.PG_HOST;
export const PG_PORT = process.env.PG_PORT;
export const PG_USERNAME = process.env.PG_USERNAME;
export const PG_PASSWORD = process.env.PG_PASSWORD;
export const PG_DATABASE = process.env.PG_DATABASE;
