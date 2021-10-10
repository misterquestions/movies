import { Args, Int, Query, Resolver } from "@nestjs/graphql";

import { Movie } from "./models/movie.model";
import { MoviesService } from "./movies.service";

@Resolver(() => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => Movie)
  async movie(@Args('id', { type: () => Int }) movieId: number): Promise<Movie> {
    return this.moviesService.getMovieById(movieId);
  }
}