'use strict';

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

class FormatError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, FormatError);
    this.message = message || msg.format;
    this.data = data;
  }
  static get defaultMessage() { return msg.format; }
}

class ValidationError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, ValidationError);
    this.message = message || msg.validation;
    this.data = data;
  }
  static get defaultMessage() { return msg.validation; }
}

class CredentialsError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, CredentialsError);
    this.message = message || msg.credentials;
    this.data = data;
  }
  static get defaultMessage() { return msg.credentials; }
}

class UnauthorizedError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, UnauthorizedError);
    this.message = message || msg.unauthorized;
    this.data = data;
  }
  static get defaultMessage() { return msg.unauthorized; }
}

class NotFoundError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, NotFoundError);
    this.message = message || msg.notFound;
    this.data = data;
  }
  static get defaultMessage() { return msg.notFound; }
}

class ExistsError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, ExistsError);
    this.message = message || msg.exists;
    this.data = data;
  }
  static get defaultMessage() { return msg.exists; }
}

class ConcurrencyError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, ConcurrencyError);
    this.message = message || msg.concurrency;
    this.data = data;
  }
  static get defaultMessage() { return msg.concurrency; }
}

class TempUnavailableError {
  constructor(message, data) {
    checkMessage(message);
    Error.call(this);
    Error.captureStackTrace(this, TempUnavailableError);
    this.message = message || msg.tempUnavailable;
    this.data = data;
  }
  static get defaultMessage() { return msg.tempUnavailable; }
}

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
