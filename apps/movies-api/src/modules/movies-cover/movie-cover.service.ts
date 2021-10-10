import { Injectable, Logger } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { nanoid } from 'nanoid';
import stream from 'stream';

import { FileUploadService } from '../file-upload/file-upload.service';

@Injectable()
export class MovieCoverService {
  private readonly logger = new Logger(MovieCoverService.name);

  constructor(private readonly fileUploadService: FileUploadService) {}

  /**
   * Uploads the cover image for a movie and returns the URL to the image.
   *
   * @param {FileUpload} upload Object from the graphql upload
   * @return {*}  {Promise<string>} The public URL to the image
   * @memberof MovieCoverService
   */
  async uploadMovieCover(file: FileUpload): Promise<string> {
    try {
      // Pipe data into a stream
      const uploadedFile = await Promise.resolve(file);
      this.logger.log('File upload ready');
      const readStream = uploadedFile.createReadStream();
      const uploadStream = new stream.PassThrough();
      readStream.pipe(uploadStream);
      this.logger.log('File upload stream ready');

      // Upload the image to the file upload service
      const fileUrl = await this.fileUploadService.uploadFile(
        nanoid(),
        uploadStream,
      );
      this.logger.log('File upload complete');

      console.log(fileUrl);
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }
}
