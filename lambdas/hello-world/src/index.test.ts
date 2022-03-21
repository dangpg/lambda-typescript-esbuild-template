import { handler } from '.';

describe('hello-world', () => {
  it('should return 200 if execution is successful', () => {
    const result = handler();

    expect(result).toEqual({
      statusCode: 200,
      body: '{"message":"Hello world"}',
    });
  });

  it('should return 500 if execution encounters error', () => {
    jest.spyOn(JSON, 'stringify').mockImplementation(() => {
      throw new Error();
    });

    const result = handler();

    expect(result).toEqual({
      statusCode: 500,
    });
  });
});
