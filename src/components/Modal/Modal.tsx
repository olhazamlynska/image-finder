import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalDiv, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root') as HTMLDivElement;

interface IModalProps {
  onClose: () => void;
  largeImageURL: string;
  tags: string;
}
export const Modal: React.FC<IModalProps> = ({
  onClose,
  largeImageURL,
  tags,
}) => {
  const closeByBackdrop = (e: React.SyntheticEvent): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeByEsc = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={closeByBackdrop}>
      <ModalDiv>
        <img src={largeImageURL} alt={tags}></img>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};
