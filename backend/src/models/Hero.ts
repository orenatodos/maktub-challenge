import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('heroes')
export default class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_description: string;

  @Column()
  full_description: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
