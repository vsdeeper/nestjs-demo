import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('todolist')
export class Todolist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 18 })
  age: number;

  @Column({ default: true })
  isMale: boolean;

  @Column({ default: '' })
  desc: string;
}
