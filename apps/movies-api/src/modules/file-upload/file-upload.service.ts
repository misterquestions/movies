import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UploadProvider } from './catalogs/upload-provider.catalog';
import { IUploadProvider } from './interfaces/upload-provider.interface';
import { IUploadedFile } from './interfaces/uploaded-file.interface';
import { AwsUploadProvider } from './providers/aws-upload.provider';
import { FileBody } from './types/file-body.type';

@Injectable()
export class FileUploadService {
  private readonly uploader: IUploadProvider;

  constructor(private readonly configService: ConfigService) {
    this.uploader = this.createUploader();
  }

  private createUploader(): IUploadProvider {
    if (
      this.configService.get<string>(
        'FILE_UPLOAD_PROVIDER',
        UploadProvider.AWS
      ) === UploadProvider.AWS
    ) {
      return new AwsUploadProvider(
        this.configService.get<string>('AWS_ACCESS_KEY_ID'),
        this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
        this.configService.get<string>('AWS_REGION'),
        this.configService.get<string>('AWS_BUCKET_NAME')
      );
    }

    return null;
  }

  async uploadFile(fileName: string, data: FileBody): Promise<IUploadedFile> {
    return this.uploader.uploadFile(fileName, data);
  }

  async deleteFile(fileName: string): Promise<boolean> {
    return this.uploader.deleteFile(fileName);
  }
}
