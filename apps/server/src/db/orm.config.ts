import { defineConfig } from '@mikro-orm/core';
import dotenv from 'dotenv';

dotenv.config();

const config = defineConfig({
  type: 'postgresql',
  dbName: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,

  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],

  migrations: {
    path: 'dist/db/migrations',
    pathTs: 'src/db/migrations',
    snapshot: false,
  },
});

export default config;
