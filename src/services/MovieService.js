import axios from 'axios';

const getAll = () => {
  return axios.get('https://my.api.mockaroo.com/movie.json');
};

export default { getAll };
