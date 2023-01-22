export type NewsType = {
  status: string;
  totalResults: number;
  articles: ArticleType[];
};

type ArticleType = {
  description: string;
  content: string;
};
