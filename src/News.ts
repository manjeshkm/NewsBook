import { Article } from './app/Article';

export interface News {
status: String;
totalResult: number;
articles: Article[];
}
