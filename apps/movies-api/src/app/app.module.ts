import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

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
        const isProduction = configService.get('NODE_ENV') === 'production';
        
        return {
          debug: !isProduction,
          playground: !isProduction,
          autoSchemaFile: path.join(__dirname, 'src/schema.gql'),
          sortSchema: true,
        };
      },
    }),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService, App],
})
export class AppModule {}
