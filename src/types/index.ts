export interface NewsParams {
  q: string;
}

export interface Obj {
  [key: string]: string;
}

export interface NewsData {
  title: string;
  description: string;
  urlToImage: string | null;
  publishedAt: Date | null;
  author: string | null;
  content: string | null;
}
