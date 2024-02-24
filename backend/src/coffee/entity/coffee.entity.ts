import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CoffeeType } from '../enums';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: CoffeeType,
  })
  type: CoffeeType;

  @Column()
  imageUrl: string;

  @Column()
  description: string;
}
