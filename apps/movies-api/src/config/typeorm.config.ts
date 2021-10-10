import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import path from 'path';

import { Movie } from '../modules/movies/models/movie.model';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT, 10),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Movie],
  migrations: [path.join(__dirname, '../**/*.migration{.ts,.js}')],
  cli: {
    migrationsDir: 'apps/movies-api/migrations',
  },
  synchronize: false,
};
