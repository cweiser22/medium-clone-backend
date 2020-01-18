import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  firstName?: string;

  @Field()
  lastName?: string;

  @Field()
  bio?: string;

  @Field()
  profilePictureUrl?: string;
}
