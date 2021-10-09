import { Module } from '@nestjs/common';

import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';

@Module({
  imports: [],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
