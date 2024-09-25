import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class User{

	@PrimaryGeneratedColumn()
	private id?: number;

	@Column()
	private name!: string;
	
}
