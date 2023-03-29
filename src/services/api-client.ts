import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '650a01fbd48246caadb5cdbd15aa37f7',
  },
});
