import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  console.log("application custom log 00001");
  console.log(`PORT : ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
