import { Injectable, Logger } from '@nestjs/common';

import { ResponseCode } from '../../common/catalogs/response-code.catalog';
import { ResponseMessage } from '../../common/catalogs/response-message.catalog';
import { FileUploadService } from '../file-upload/file-upload.service';
import { MovieCoverService } from '../movies-cover/movie-cover.service';

import { CreateMovieDTO } from './dtos/create-movie.dto';
import { FindMovieByIdDTO } from './dtos/find-movie-by-id.dto';
import { MovieResponse } from './dtos/movie-response.dto';
import { Movie } from './models/movie.model';

@Injectable()
export class MoviesService {
  private readonly logger = new Logger(MoviesService.name);

  constructor(private readonly movieCoverService: MovieCoverService) {}

  /**
   * This method will create a new movie and store it into the database, also upload the cover image for later usage.
   *
   * @param {CreateMovieDTO} input Input data for the movie creation.
   * @return {*}  {Promise<MovieResponse>} Returns the created movie
   * @memberof MoviesService
   */
  async createMovie(input: CreateMovieDTO): Promise<MovieResponse> {
    try {
      // Upload the cover image
      const coverURL = await this.movieCoverService.uploadMovieCover(input.cover);

      if (!coverURL) {
        return {
          code: ResponseCode.MovieCoverUploadError,
          message: ResponseMessage.MovieCoverUploadError,
        };
      }

      // Create the movie record
      const movie = new Movie();

      movie.name = input.name;
      movie.coverURL = coverURL;
      movie.releaseDate = input.releaseDate;
      movie.rating = input.rating;

      movie.save();

      return {
        code: ResponseCode.Success,
        message: ResponseMessage.Success,
        data: movie,
      };
    } catch (error) {
      this.logger.error(error);

      return {
        code: ResponseCode.InternalExecutionError,
        message: ResponseMessage.InternalExecutionError,
      };
    }
  }

  async getMovieById(input: FindMovieByIdDTO): Promise<MovieResponse> {
    try {
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
    } catch (error) {
      this.logger.error(error);

      return {
        code: ResponseCode.InternalExecutionError,
        message: ResponseMessage.InternalExecutionError,
      };
    }
  }
}
