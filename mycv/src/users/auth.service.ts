import { BadRequestException, Injectable } from "@nestjs/common";
import { scrypt as _scrypt, randomBytes } from "crypto"; //scrypt uses callbacks instead of promise/Observable which
import { UsersService } from "./users.service";
// is old style of writing asynchronous programming
import { promisify } from "util";

const scrypt = promisify(_scrypt);

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

    //1>Generate a salt

    const salt = randomBytes(8).toString("hex");
    //2>hash the salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    //3.joined the hashed result and the salt together

    const result = salt + "." + hash.toString("hex");

    //create a new Users and save it
    const user = await this.userService.create(email, result);
    //return a user
    return user;
  }
  signin() {}
}
