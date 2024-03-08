import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class ToleranceModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tolerance: number;

  @Column()
  backgroundColor: string;

  @Column()
  textColor: string;
}
