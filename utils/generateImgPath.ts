export const generateImgPath = (
  fileName: string,
  directoryName: string | null
) => {
  const basePath = "../assets/images/";
  const fullPath: string = directoryName
    ? `${basePath}${directoryName}/${fileName}`
    : `${basePath}/${fileName}`;
  return new URL(fullPath, import.meta.url).href;
};
