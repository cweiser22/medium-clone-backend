import { Entity, PrimaryColumn, ManyToMany } from 'typeorm';
import { Article } from './article.entity';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Tag {
  @Field()
  @PrimaryColumn()
  name: number;

  @Field(type => [Article])
  @ManyToMany(type => Article)
  articles: Article[];
}
