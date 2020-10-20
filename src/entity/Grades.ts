import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Grades {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  grades: number;

  @Column()
  isQualified: boolean;

  @OneToOne(type => User)
  @JoinColumn()
  test: User
}
