import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (query, page = 1, perPage = 20) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data.results;
};
