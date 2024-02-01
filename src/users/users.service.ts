import { Injectable } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  async getUserInfo(): Promise<User> {
    return {
      id: 'id',
      password: 'password',
      username: 'username',
    };
  }
}
