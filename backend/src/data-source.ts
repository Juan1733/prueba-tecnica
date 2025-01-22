import { DataSource } from 'typeorm';
import { Car } from './cars/entities/car.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'database', 
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'my_db',
    entities: [Car], 
    migrationsTableName: 'migrations',
    migrations: ['src/database/migrations/*.ts'],
    synchronize: false,    
});