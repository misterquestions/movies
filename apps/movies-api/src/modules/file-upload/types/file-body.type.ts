import { Readable } from "stream";

export type FileBody = Buffer | Uint8Array | Blob | string | Readable;