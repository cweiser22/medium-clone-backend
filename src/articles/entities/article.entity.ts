import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Tag } from './tag.entity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class Article {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 100 })
  title: string;

  @Field()
  @Column({ length: 200 })
  description: string;

  @Field()
  @Column()
  content: string;

  @Field(type => User)
  @ManyToOne(
    type => User,
    user => user.articles,
  )
  author: User;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(type => [Tag])
  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[];
}
