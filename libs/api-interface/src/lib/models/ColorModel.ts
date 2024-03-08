import {  Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class ColorModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  modifier!: number;

  @Column()
  name!: string;

  @Column()
  backgroundColor!: string;

  @Column()
  textColor!: string;
}
