import { Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';

import { IUploadProvider } from '../interfaces/upload-provider.interface';
import { IUploadedFile } from '../interfaces/uploaded-file.interface';
import { FileBody } from '../types/file-body.type';

export class AwsUploadProvider implements IUploadProvider {
  private readonly logger = new Logger(AwsUploadProvider.name);
  private readonly s3: S3;

  constructor(
    private readonly accessKeyId: string,
    private readonly secretAccessKey: string,
    private readonly region: string,
    private readonly bucketName: string
  ) {
    this.logger.debug(
      `Initializing AWS S3 with access: ${accessKeyId}, secret: ${secretAccessKey}, region: ${region}`
    );

    this.s3 = new S3({ accessKeyId, secretAccessKey, region });
  }

  async uploadFile(fileName: string, data: FileBody): Promise<IUploadedFile> {
    try {
      this.logger.debug(`Uploading file ${fileName} to S3`);
      this.logger.debug(JSON.stringify(data));

      const result = await this.s3
        .upload({
          Bucket: this.bucketName,
          Body: data,
          Key: `${fileName}`,
        })
        .promise();

      return {
        name: result.Key,
        url: result.Location,
      };
    } catch (error) {
      this.logger.error(error);
    }

    return null;
  }

  async deleteFile(fileName: string): Promise<boolean> {
    try {
      const result = await this.s3
        .deleteObject({
          Bucket: this.bucketName,
          Key: fileName,
        })
        .promise();

      if (result.DeleteMarker) {
        return true;
      }
    } catch (error) {
      this.logger.error(error);
    }

    return false;
  }
}
