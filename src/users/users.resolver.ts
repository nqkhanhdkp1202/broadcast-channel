import { Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '@users/users.service';
import { User } from '../graphql.schema';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('me')
  async getUserInfo(): Promise<User> {
    return await this.usersService.getUserInfo();
  }
}
