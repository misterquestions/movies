import { ReadStream } from 'fs';

export const convertStreamToBuffer = async (
  stream: ReadStream
): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    const buff = [];

    stream.on('data', (chunk) => buff.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(buff)));
    stream.on('error', (err) => reject(err));
  });
