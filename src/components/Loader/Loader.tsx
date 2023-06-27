import { ThreeDots } from 'react-loader-spinner';
import { Backdrop, LoaderWrapper } from './Loader.styled';

export const Loader: React.FC = () => {
  return (
    <Backdrop>
      <LoaderWrapper>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4bbed7"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </LoaderWrapper>
    </Backdrop>
  );
};
