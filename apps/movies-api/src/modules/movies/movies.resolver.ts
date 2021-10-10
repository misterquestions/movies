import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindMovieByIdDTO } from './dtos/find-movie-by-id.dto';
import { MovieResponse } from './dtos/movie-response.dto';

import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => MovieResponse)
  async movie(
    @Args('input', { type: () => FindMovieByIdDTO }) input: FindMovieByIdDTO
  ): Promise<MovieResponse> {
    return this.moviesService.getMovieById(input);
  }
}
