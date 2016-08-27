'use strict';

const assert = require('chai').assert;

const errors = require('../../lib');

describe('FormatError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.FormatError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.FormatError();
      assert.strictEqual(e.message, errors.FormatError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.FormatError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.FormatError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.FormatError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.FormatError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('ValidationError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.ValidationError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.ValidationError();
      assert.strictEqual(e.message, errors.ValidationError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.ValidationError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ValidationError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ValidationError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.ValidationError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('CredentialsError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.CredentialsError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.CredentialsError();
      assert.strictEqual(e.message, errors.CredentialsError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.CredentialsError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.CredentialsError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.CredentialsError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.CredentialsError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('UnauthorizedError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.UnauthorizedError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.UnauthorizedError();
      assert.strictEqual(e.message, errors.UnauthorizedError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.UnauthorizedError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.UnauthorizedError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.UnauthorizedError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.UnauthorizedError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('NotFoundError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.NotFoundError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.NotFoundError();
      assert.strictEqual(e.message, errors.NotFoundError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.NotFoundError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.NotFoundError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.NotFoundError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.NotFoundError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('ExistsError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.ExistsError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.ExistsError();
      assert.strictEqual(e.message, errors.ExistsError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.ExistsError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ExistsError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ExistsError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.ExistsError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('ConcurrencyError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.ConcurrencyError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.ConcurrencyError();
      assert.strictEqual(e.message, errors.ConcurrencyError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.ConcurrencyError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ConcurrencyError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.ConcurrencyError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.ConcurrencyError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});

describe('TempUnavailableError', () => {
  describe('#constructor', () => {
    it('should use message if provided', () => {
      const e = new errors.TempUnavailableError('a');
      assert.strictEqual(e.message, 'a');
    });

    it('should use default if no message provided', () => {
      const e = new errors.TempUnavailableError();
      assert.strictEqual(e.message, errors.TempUnavailableError.defaultMessage);
    });

    it('should throw if message is not a string or undefined', () => {
      assert.throws(() => {
        const e = new errors.TempUnavailableError(123);
      }, TypeError);
    });

    it('should not throw if message is string', () => {
      assert.doesNotThrow(() => {
        const e = new errors.TempUnavailableError('a');
      }, TypeError);
    });

    it('should not throw if message is undefined', () => {
      assert.doesNotThrow(() => {
        const e = new errors.TempUnavailableError();
      }, TypeError);
    });

    it('should assign data property to data arg', () => {
      const e = new errors.TempUnavailableError(undefined, 123);
      assert.strictEqual(e.data, 123);
    });
  });
});
