interface Source {
  id: string;
  name: string;
}

interface NewsModel {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export default NewsModel;
