import { IImage } from '../../interfaces/AllInterfaces';
import { GalleryItem } from '../GalleryItem';
import { ImageUl } from './Gallery.styled';

interface IGalleryProps {
  images: IImage[];
}
export const Gallery: React.FC<IGalleryProps> = ({ images }) => {
  return (
    <ImageUl>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageUl>
  );
};
