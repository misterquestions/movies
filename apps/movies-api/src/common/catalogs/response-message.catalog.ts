export enum ResponseMessage {
  Success = 'OK',
  InternalExecutionError = 'Internal error during execution',
  MovieCoverUploadError = 'Can\'t upload cover image',
  MovieNotFoundWithID = 'Movie with given ID doesn\'t exists',
}