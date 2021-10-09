import { Query, Resolver } from "@nestjs/graphql";

import { Movie } from "./models/movie.model";
import { MoviesService } from "./movies.service";

@Resolver(of => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(returns => Movie)
  async movie(): Promise<Movie> {
    return { cover: '', name: 'asasd', rating: 4.5, releaseDate: new Date() };
  }
}