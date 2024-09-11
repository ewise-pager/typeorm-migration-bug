import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: 'postgres',
  database: 'mydb',
  entities: [__dirname + '/entities/*.ts'],
  synchronize: false,
  logging: false,
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsTransactionMode: 'each',
});

export default AppDataSource;
