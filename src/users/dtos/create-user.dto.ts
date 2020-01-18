import { InputType, Field } from 'type-graphql';

export class CreateUserDTO {
  username: string;

  password: string;

  firstName: string;

  lastName: string;
}
