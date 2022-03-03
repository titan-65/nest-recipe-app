import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image?: string;

  @Column('simple-array')
  ingredients: string[];

  @Column('simple-array')
  directions: string[];

  @Column('simple-array')
  tags: string[];

  @Column()
  prepTime: number;

  @Column()
  cookTime: number;

  @Column()
  servings: number;

  @Column()
  totalTime: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
