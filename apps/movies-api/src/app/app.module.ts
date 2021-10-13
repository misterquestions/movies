import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';

import { typeormConfig } from '../config/typeorm.config';
import { MoviesModule } from '../modules/movies/movies.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      limit: 10,
      ttl: 60,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const currentEnv = configService.get<string>('NODE_ENV') || 'development';
        const isProduction = currentEnv.toLowerCase() === 'production';
        
        return {
          debug: !isProduction,
          playground: !isProduction,
          autoSchemaFile: path.join(__dirname, 'src/schema.gql'),
          sortSchema: true,
          cors: {
            origin: 'http://localhost:3333',
            credentials: true,
          },
        };
      },
    }),
    TypeOrmModule.forRoot(typeormConfig),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
