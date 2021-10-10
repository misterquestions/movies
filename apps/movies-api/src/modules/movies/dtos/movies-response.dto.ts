import { Field, ObjectType, PartialType } from '@nestjs/graphql';
import { BaseResponse } from '../../../common/dtos/base-response.dto';
import { Movie } from '../models/movie.model';

@ObjectType()
export class MoviesResponse extends PartialType(BaseResponse, ObjectType) {
  @Field(() => [Movie], { nullable: true })
  data?: Array<Movie>;
}
