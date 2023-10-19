import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";

@Controller("auth")
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post("/signup")
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get("/:id")
  findUser(@Param() id: number) {
    const user = this.userService.findOne(id);
    console.log(user);
  }

  @Get("/:email")
  findAllUser(@Param() email: string) {
    this.userService.find(email);
  }
}
