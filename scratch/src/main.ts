import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";




//used to pass some configuration while application bootstraps
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();

