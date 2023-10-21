import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  //@InjectRepository(User) ->needed for Generic type Repository<User>
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    this.repo.save(user);
    //or ==>HOOKS will not be executed when we directly save object
    // this.repo.save({ email, password });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id: id } });
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("User Not Found !");
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException("User not Found !");
    }

    this.repo.remove(user);
  }
}
