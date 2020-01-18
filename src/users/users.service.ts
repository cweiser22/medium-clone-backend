import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './entities/user.entity';
import * as argon2 from 'argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
  ) {}
  async create(input: CreateUserDTO): Promise<User> {
    //hash the password
    const hash = await argon2.hash(input.password);

    //save with hashed password
    return await this.usersRepo.save({ ...input, password: hash });
  }

  async update(input: UpdateUserInput, id: number) {
    //find the specified user and update
    return await this.usersRepo.update(id, input);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.usersRepo.findOne({ username });
  }

  async findById(id: number): Promise<User> {
    return await this.usersRepo.findOne(id);
  }
}
