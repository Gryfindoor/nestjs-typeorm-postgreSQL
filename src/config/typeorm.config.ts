import * as dotenv from 'dotenv';
dotenv.config();
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: `${process.env.host}`,
  port: 5432,
  username: `${process.env.username}`,
  password: `${process.env.password}`,
  database: `${process.env.database}`,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
