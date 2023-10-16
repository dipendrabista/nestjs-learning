import { Controller, Get, Module } from "@nestjs/common"; //More than 95% we use @nestjs/common than @nestjs/core
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'Hello From Nest!'
    }
}

@Module({ controllers: [AppController] })
class AppModule {
}
//used to pass some configuration while application bootstraps
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();

