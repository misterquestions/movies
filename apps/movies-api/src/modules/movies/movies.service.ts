import { Injectable } from '@nestjs/common';
import { ResponseCode } from '../../common/catalogs/response-code.catalog';
import { ResponseMessage } from '../../common/catalogs/response-message.catalog';
import { FindMovieByIdDTO } from './dtos/find-movie-by-id.dto';
import { MovieResponse } from './dtos/movie-response.dto';
import { Movie } from './models/movie.model';

@Injectable()
export class MoviesService {
  async getMovieById(input: FindMovieByIdDTO): Promise<MovieResponse> {
    const movie = await Movie.findOne(input.id);

    if (!movie) {
      return {
        code: ResponseCode.MovieNotFoundWithID,
        message: ResponseMessage.MovieNotFoundWithID,
      };
    }

    return {
      code: ResponseCode.Success,
      message: ResponseMessage.Success,
      data: movie,
    };
  }

  async get
}
