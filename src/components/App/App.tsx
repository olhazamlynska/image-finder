import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as API from '../../services/pixabayAPI';
import { IImage } from '../../interfaces/AllInterfaces';
import { imageMaper } from '../../utils/imageMapper';
import { Searchbar } from '../Searchbar/Searchbar';
import { LoadMorenBtn } from '../LoadMoreBtn';
import { Loader } from '../Loader';
import { Gallery } from '../Gallery';

export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<IImage[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totallHits, setTotallHits] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);

        const { hits, totalHits } = await API.fetchImg(query, page);
        const pictures = imageMaper(hits);
        if (hits.length === 0) {
          toast.error('There no images with your request.Try again...');
        }
        setImages(prevState => [...prevState, ...pictures]);
        setTotallHits(totalHits);
      } catch (error) {
        setError(true);
        toast.error('Something went wrong.Try again...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, query]);

  const handleSubmit = (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      toast.error('Please, enter search data');
      return;
    }

    if (query === searchQuery) {
      toast.error('You have the same search. Please try another word');
      return;
    }
    setImages([]);
    setQuery(searchQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const totalHitsCondition = totallHits - page * 12;

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>Something went wrong, try again!</p>}
      {isLoading && <Loader />}
      {images && <Gallery images={images} />}
      {images.length > 0 && totalHitsCondition > 0 && (
        <LoadMorenBtn onClick={loadMore} />
      )}
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
}
