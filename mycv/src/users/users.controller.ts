import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Session,
} from "@nestjs/common";
import { Serialize } from "src/interceptors/serialize.interceptor";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";

import { CurrentUser } from "./decorators/current-user.decorators";

@Controller("auth")
@Serialize(UserDto) //Controller Wide Serialization
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post("/signup")
  async createUser(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post("/signin")
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signin(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post("/signout")
  signout(@Session() session: any) {
    session.userId = null;
  }

  // @Get("/whoami")
  // showAmI(@Session() session: any) {
  //   return this.userService.findOne(session.userId); // it will return first record from the database
  // }

  @Get("/whoami")
  showAmI(@CurrentUser() user: string) {
    return user; // it will return first record from the database
  }

  @Get("/:id")
  async findUser(@Param("id") id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException("User not found!");
    }
    return user;
  }

  @Get()
  findAllUsers(@Query("email") email: string) {
    return this.userService.find(email);
  }

  @Delete("/:id")
  removeUser(@Param("id") id: string) {
    return this.userService.remove(parseInt(id));
  }

  @Patch("/:id")
  udpateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
