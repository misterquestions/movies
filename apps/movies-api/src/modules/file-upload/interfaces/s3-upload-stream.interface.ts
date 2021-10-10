import stream from "stream";

export interface IS3UploadStream {
  writeStream: stream.PassThrough;
  promise: Promise<AWS.S3.ManagedUpload.SendData>;
}
