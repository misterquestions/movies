import { Field, InputType, Int } from "@nestjs/graphql";

@InputType('FindMovieByIdInput')
export class FindMovieByIdDTO {
  @Field(() => Int)
  id: number;
}