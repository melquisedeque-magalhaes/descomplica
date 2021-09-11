import { NestFactory } from '@nestjs/core';


import { StudentsModule } from './students/students.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentsModule);
  app.enableCors()

  await app.listen(3333);
}

bootstrap();
