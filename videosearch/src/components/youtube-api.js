import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyC7m7KjQCYmmsWNJIocgFVk06MkN5S9urE';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then(response => {
        resolve(response.data.items);
      })
      .catch(error => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default youtubeSearch;