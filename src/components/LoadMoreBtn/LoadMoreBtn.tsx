import React from 'react';
import { BtnLoadMore } from './LoadMoreBtn.styled';

interface ILoadMorenBtnProp {
  onClick: () => void;
}
export const LoadMorenBtn: React.FC<ILoadMorenBtnProp> = ({ onClick }) => {
  return (
    <BtnLoadMore onClick={onClick} type="button">
      Load more
    </BtnLoadMore>
  );
};
