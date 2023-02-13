import { defineConfig } from '@mikro-orm/core';

const config = defineConfig({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  migrations: {
    path: 'dist/db/migrations',
    pathTs: 'src/db/migrations',
    snapshot: false,
  },
});

export default config;
