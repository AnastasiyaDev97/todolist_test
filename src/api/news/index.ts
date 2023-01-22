import { instance } from '../config';

import { NewsType } from './types';

export const newsAPI = {
  async getNews() {
    const response = await instance.get<NewsType>('', {
      params: {
        sortBy: 'publishedAt',
        apiKey: process.env.REACT_APP_API_KEY,
        q: 'tesla',
        pageSize: 1,
      },
    });

    return response?.data?.articles;
  },
};
