import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';

import { typeormConfig } from '../config/typeorm.config';
import { MoviesModule } from '../modules/movies/movies.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
