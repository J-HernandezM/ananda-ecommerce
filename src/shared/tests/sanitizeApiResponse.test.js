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
});
