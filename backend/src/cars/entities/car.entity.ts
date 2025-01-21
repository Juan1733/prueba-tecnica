import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;
}