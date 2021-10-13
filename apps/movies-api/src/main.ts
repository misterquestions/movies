import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { graphqlUploadExpress } from 'graphql-upload';
import helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT', 3333);
  const nodeEnv = configService.get<string>('NODE_ENV', 'development').toLowerCase();
  const isProduction = nodeEnv === 'production';

  app.use(
    graphqlUploadExpress({
      maxFileSize: 10000000,
      maxFiles: 10,
    })
  );
  app.useGlobalPipes(new ValidationPipe());

  app.use(cookieParser());
  app.use(
    session({
      secret: configService.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
    })
  );

  app.enableCors();
  app.use(helmet({ contentSecurityPolicy: isProduction ? undefined : false }));

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/`);
  });
}

bootstrap();
