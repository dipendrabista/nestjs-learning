import { NestFactory } from '@nestjs/core';
import { MessegesModule } from './messeges.module';

async function bootstrap() {
  const app = await NestFactory.create(MessegesModule);
  await app.listen(4000);
}
bootstrap();
