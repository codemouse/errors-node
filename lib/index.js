'use strict';

const elv = require('elv');

const msg = {
  format: 'The request format was invalid.',
  validation: 'Validation failed.',
  credentials: 'The provided user credentials are invalid.',
  unauthorized: 'The user is not authorized to perform the requested action.',
  notFound: 'The requested item was not found.',
  exists: 'Object already exists.',
  concurrency: 'The provided version does match the current value.',
  tempUnavailable: 'The requested resource is temporarily unavailable.'
}

const checkMessage = (message) => {
  if (typeof message !== 'undefined' && typeof message !== 'string')
    throw new TypeError('Message must be a string.');
}

/**
  FormatError
*/
function FormatError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, FormatError);
  this.message = elv.coalesce(message, msg.format);
  if (elv(data)) this.data = data;
}
FormatError.defaultMessage = msg.format;
FormatError.prototype = Object.create(Error.prototype);
FormatError.prototype.constructor = FormatError;

/**
  ValidationError
*/
function ValidationError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, ValidationError);
  this.message = elv.coalesce(message, msg.validation);
  if (elv(data)) this.data = data;
}
ValidationError.defaultMessage = msg.validation;
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

/**
  CredentialsError
*/
function CredentialsError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, CredentialsError);
  this.message = elv.coalesce(message, msg.credentials);
  if (elv(data)) this.data = data;
}
CredentialsError.defaultMessage = msg.credentials;
CredentialsError.prototype = Object.create(Error.prototype);
CredentialsError.prototype.constructor = CredentialsError;

/**
  UnauthorizedError
*/
function UnauthorizedError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, UnauthorizedError);
  this.message = elv.coalesce(message, msg.unauthorized);
  if (elv(data)) this.data = data;
}
UnauthorizedError.defaultMessage = msg.unauthorized;
UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

/**
  NotFoundError
*/
function NotFoundError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, NotFoundError);
  this.message = elv.coalesce(message, msg.notFound);
  if (elv(data)) this.data = data;
}
NotFoundError.defaultMessage = msg.notFound;
NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

/**
  ExistsError
*/
function ExistsError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, ExistsError);
  this.message = elv.coalesce(message, msg.exists);
  if (elv(data)) this.data = data;
}
ExistsError.defaultMessage = msg.exists;
ExistsError.prototype = Object.create(Error.prototype);
ExistsError.prototype.constructor = ExistsError;

/**
  ConcurrencyError
*/
function ConcurrencyError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, ConcurrencyError);
  this.message = elv.coalesce(message, msg.concurrency);
  if (elv(data)) this.data = data;
}
ConcurrencyError.defaultMessage = msg.concurrency;
ConcurrencyError.prototype = Object.create(Error.prototype);
ConcurrencyError.prototype.constructor = ConcurrencyError;

/**
  TempUnavailableError
*/
function TempUnavailableError(message, data) {
  checkMessage(message);
  Error.captureStackTrace(this, TempUnavailableError);
  this.message = elv.coalesce(message, msg.tempUnavailable);
  if (elv(data)) this.data = data;
}
TempUnavailableError.defaultMessage = msg.tempUnavailable;
TempUnavailableError.prototype = Object.create(Error.prototype);
TempUnavailableError.prototype.constructor = TempUnavailableError;

module.exports = {
  FormatError: FormatError,
  ValidationError: ValidationError,
  CredentialsError: CredentialsError,
  UnauthorizedError: UnauthorizedError,
  NotFoundError: NotFoundError,
  ExistsError: ExistsError,
  ConcurrencyError: ConcurrencyError,
  TempUnavailableError: TempUnavailableError
}
