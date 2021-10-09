import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Movie {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'datetime' })
  @Field(() => Date)
  releaseDate: Date;

  @Column()
  @Field()
  cover: string;

  @Column({ type: 'float' })
  @Field(() => Float)
  rating: number;
}