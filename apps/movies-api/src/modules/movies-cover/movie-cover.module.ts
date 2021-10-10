import { Module } from '@nestjs/common';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { MovieCoverService } from './movie-cover.service';

@Module({
  imports: [FileUploadModule],
  providers: [MovieCoverService],
  exports: [MovieCoverService],
})
export class MovieCoverModule {}
