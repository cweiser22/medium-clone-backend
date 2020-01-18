import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CreateUserDTO } from './users/dtos/create-user.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post()
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  //TODO: consider moving this to the users module
  @Post('/register')
  async register(@Body() dto: CreateUserDTO) {
    try {
      return await this.usersService.create(dto);
    } catch (e) {
      throw new BadRequestException('Could not create user. Invalid request.');
    }
  }
}
