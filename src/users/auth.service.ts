/**
 * @param {
 * email:string,
 *  password:string
 * }
 * @method signup()
 * @method signin()
 *  */

import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    // check email is in use
    const user = await this.userService.find(email);

    if (user.length) {
      throw new BadRequestException(`Email in use`);
    }

    // hash the user password
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user and save
    const User = await this.userService.create(email, hashedPassword);
    // return user
    return User;
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw new BadRequestException('Invalid password');
    }
    return user;
  }
}
