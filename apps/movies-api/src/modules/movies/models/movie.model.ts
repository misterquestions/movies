import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', length: 255 })
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
