import { Entity, PrimaryColumn, ManyToMany } from 'typeorm';
import { Article } from './article.entity';

@Entity()
export class Tag {
  @PrimaryColumn()
  name: number;

  @ManyToMany(type => Article)
  articles: Article[];
}
