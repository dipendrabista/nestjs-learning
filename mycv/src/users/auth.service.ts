import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    //see if email is in use

    const users = await this.userService.find(email);

    if (users.length) {
      throw new BadRequestException("Email is in use");
    }
    //Hash the users password

    //create a new Users and save it
    //return a user
  }
  signin() {}
}
