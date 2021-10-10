import { Field, Float, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNumber,
  IsString,
  Max,
  MinLength,
} from 'class-validator';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@InputType('CreateMovieInput')
export class CreateMovieDTO {
  @Field()
  @IsDefined()
  @IsString()
  @MinLength(2)
  name: string;

  @Field(() => Date)
  @IsDefined()
  @IsDate()
  @Type(() => Date)
  releaseDate: Date;

  @Field(() => GraphQLUpload)
  @IsDefined()
  cover: FileUpload;

  @Field(() => Float)
  @IsDefined()
  @IsNumber({ allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })
  @Max(10)
  rating: number;
}
