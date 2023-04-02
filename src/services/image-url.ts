// The rawg.io API allows inserting crop size into the url for smaller image downloads
const getCroppedImageUrl = (url: string): string => {
  if (!url)
    return 'https://images.unsplash.com/photo-1575186083127-03641b958f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGJpa2luaXxlbnwwfHwwfHw%3D&auto=format&fit=clamp&w=600&h=400&q=60';

  const urlTarget = 'media/';
  const index = url.indexOf(urlTarget) + urlTarget.length;

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;
