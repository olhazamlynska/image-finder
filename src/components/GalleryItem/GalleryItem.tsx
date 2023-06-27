import { useState } from 'react';
import { IImage } from '../../interfaces/AllInterfaces';
import { Modal } from '../Modal';
import { ImageLi, Img } from './GalleryItem.styled';

interface IGalleryItemProps extends IImage {
  key: number;
}
export const GalleryItem: React.FC<IGalleryItemProps> = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toogleModal = () => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      <ImageLi onClick={toogleModal} key={id}>
        <Img src={webformatURL} alt={tags} />
      </ImageLi>

      {showModal && (
        <Modal
          onClose={toogleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        ></Modal>
      )}
    </>
  );
};
