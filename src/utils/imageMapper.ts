import { IImage } from '../interfaces/AllInterfaces';

export const imageMaper = (hits: IImage[]) => {
  return hits.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};
