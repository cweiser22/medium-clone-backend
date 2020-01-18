import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Article } from '../../articles/entities/article.entity';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity({ name: 'user_account' })
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  bio: string;

  @Field()
  @Column()
  profilePictureUrl: string;

  @Column()
  password: string;

  @Field(type => [Article])
  @OneToMany(
    type => Article,
    article => article.author,
  )
  articles: Article[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
