'use client';

export default function strapiImageLoader({ src, width, quality = 75 }) {
  return `${process.env.NEXT_IMAGE_BUCKET_URL}${src}?w=${width}&q=${quality}`;
}
