import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class FindMovieByIdDTO {
  @Field(() => Int)
  id: number;
}