import { Module } from '@nestjs/common';

import { MovieCoverModule } from '../movies-cover/movie-cover.module';

import { MoviesResolver } from './movies.resolver';
import { MoviesService } from './movies.service';

@Module({
  imports: [MovieCoverModule],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
