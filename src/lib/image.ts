export const getResponsiveImgProps = (url: string) => {
  return {
    src: url,
    srcSet: url,
    sizes: '100vw'
  };
};
