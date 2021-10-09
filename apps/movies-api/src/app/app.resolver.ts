import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';

@Resolver('AppResolver')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => )
  getData() {
    return this.appService.getData();
  }
}
