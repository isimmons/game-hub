// The rawg.io API allows inserting crop size into the url for smaller image downloads
import noImagePlaceholder from '~/assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string): string => {
  if (!url) return noImagePlaceholder;

  const urlTarget = 'media/';
  const index = url.indexOf(urlTarget) + urlTarget.length;

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
