import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30707124-090c2c800eff03e7656171a71';

// ?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12

export const fetchImg = async (search: string, page: number) => {
  const response =
    await axios.get(`?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
  `);
  return response.data;

  //  const { data } =
  //    await axios.get(`?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12
  //`);
  //  return data;
};
