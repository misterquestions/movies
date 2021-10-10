import { FileBody } from '../types/file-body.type';
import { IUploadedFile } from './uploaded-file.interface';

export interface IUploadProvider {
  uploadFile(fileName: string, data: FileBody): Promise<IUploadedFile>;
  deleteFile(fileName: string): Promise<boolean>;
}
