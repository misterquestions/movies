/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(graphqlUploadExpress({
    maxFileSize: 10000000,
    maxFiles: 10,
  }))
  app.useGlobalPipes(new ValidationPipe());
  
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/`);
  });
}

bootstrap();
