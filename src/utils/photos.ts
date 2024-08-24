export async function getAlbumImages(albumId: string) {
  // 1. List all album files from collections path
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/content/albums/**/*.{jpeg,jpg,png,JPG,PNG}"
  );

  // 2. Filter images by albumId
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(albumId))
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default))
  );

  return resolvedImages;
}

export async function getPlayImages() {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/play/**/*.{jpeg,jpg,png,JPG,PNG,gif}"
  );
  const resolvedImages = await Promise.all(
      Object.values(images).map((image) => image().then((file) => file.default))
    );
  return resolvedImages;
}