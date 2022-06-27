export interface NewsParams {
  q: string;
}

export interface Obj {
  [key: string]: string;
}

export interface NewsData {
  urlToImage: string | null;
  title: string;
  publishedAt: Date;
  description: string;
  author: string;
  content: string;
}
