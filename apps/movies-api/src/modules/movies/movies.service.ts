import { Injectable } from "@nestjs/common";
import { Movie } from "./models/movie.model";

@Injectable()
export class MoviesService {
  
  async getMovieById(movieId: number): Promise<Movie> {
    const movie = Movie.findOne(movieId);

    if (!movie) {
      throw new Error(`No movie found for ID: ${movieId}`);
    }

    return movie;
  }
}