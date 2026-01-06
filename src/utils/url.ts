/** Check if an Image Path is Relative or Absolute */
export const resolveImageUrl = (image: string, url: URL) => {
  try {
    new URL(image);
    return image;
  } catch (error) {
    return new URL(image, url).toString();
  }
};
