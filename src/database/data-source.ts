import {DataSource } from 'typeorm';
import {User} from '../entities/User';

export const AppDataSource = new DataSource({
type: 'sqlite',
database: './db.sqlite',
entities: [User],
synchronize: true,
});
