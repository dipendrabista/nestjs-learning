import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessegesModule } from './messeges.module';
async function bootstrap() {
  const app = await NestFactory.create(MessegesModule);
  //validate every single requests
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(4000);
}
bootstrap();
