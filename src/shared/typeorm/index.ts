import path from 'path';
import { createConnection } from 'typeorm';

createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'adhem_sales_dev',
  synchronize: true,
  logging: false,
  entities: [
    path.join(__dirname, '..', 'entity', '**', '*.*'),
    path.join(__dirname, '..', 'entity', '*.*'),
  ],
  migrations: [path.join(__dirname, 'migrations', '*.*')],
  migrationsRun: true,
  subscribers: [],
  migrationsTableName: 'migragion_scheme',
});
