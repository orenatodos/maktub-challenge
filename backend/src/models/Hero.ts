import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('heroes')
export default class Hero {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  short_description: string;

  @Column()
  full_description: string;

  @Column()
  image: string;
}
