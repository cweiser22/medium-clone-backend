import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { ArticlesService } from 'src/articles/articles.service';
import { NotFoundException } from '@nestjs/common';

@Resolver('Users')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly articlesService: ArticlesService,
  ) {}

  @Query(returns => User)
  async user(@Args('id') id: number): Promise<User> {
    try {
      return await this.usersService.findById(id);
    } catch (e) {
      throw new NotFoundException('User with id ' + id + ' does not exist.');
    }
  }

  //TODO: resolve articles
  @ResolveProperty()
  async articles(@Parent() author) {
    const { id } = author;
  }
}
