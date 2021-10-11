import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import csurf from 'csurf';
import { graphqlUploadExpress } from 'graphql-upload';
import helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  app.use(csurf());

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
