import { Controller } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller()
export class MoviesController {
  public constructor(private readonly moviesService: MoviesService) {}
}