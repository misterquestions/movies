import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('BaseResponse')
export class BaseResponse {
  @Field(() => Int)
  code: number;

  @Field()
  message: string;
}
