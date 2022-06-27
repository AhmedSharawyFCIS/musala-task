export interface NewsItem {
  urlToImage: string | null;
  title: string;
  publishedAt: Date;
  description: string;
  author: string;
  content: string;
}

export interface Props {
  route: { params: { item: NewsItem } };
}
