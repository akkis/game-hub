import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4f429744be3a454f935b5b310c5780b0',
  },
});
