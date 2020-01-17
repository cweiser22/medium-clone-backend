import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UsersModule,
    ArticlesModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
