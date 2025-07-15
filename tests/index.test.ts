import type { JSONSchema7 } from 'json-schema'
import _jsf from '../src/lib/main.mjs'

export const jsf = _jsf;

describe('test', () => {
  it('should ', () => {
    const schema: JSONSchema7 = {
      allOf: [
        {
          type: 'string',
          minLength: 2,
        },
        {
          type: 'string',
          maxLength: 4,
        },
      ],
    }
    const syncValue = jsf.generate(schema)
    expect(syncValue).toBe('')
  });
});
