import { sanitizeApiResponse } from '../sanitizeApiResponse';
import mockStrapiResponse from './mock.json';

describe('sanitizeApiResponse', () => {
  test('Should map correctly', () => {
    const imageMatcher = expect.objectContaining({
      url: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
      alternativeText: expect.any(String),
    });

    const expected = expect.objectContaining({
      title: expect.any(String),
      description: expect.any(String),
      id: expect.any(Number),
      images: expect.arrayContaining([imageMatcher]),
      featuredImage: imageMatcher,
    });

    const result = sanitizeApiResponse(mockStrapiResponse);

    expect(result).toEqual(expect.arrayContaining([expected]));
  });

  it('Should be empty if API response is invalidad', () => {
    const invalidData = { data: undefined };

    const expected = undefined;
    const result = sanitizeApiResponse(invalidData);

    expect(expected).toBe(result);
  });

  it('Should be empty if API response is not an array', () => {
    const invalidData = { data: 123123 };

    const expected = undefined;
    const result = sanitizeApiResponse(invalidData);

    expect(expected).toBe(result);
  });
});