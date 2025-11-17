export class InvalidRequestError extends Error {
  constructor(message = 'Invalid Request') {
    super(message);
    this.name = 'InvalidRequestError'
    this.status = 400;
  }
}