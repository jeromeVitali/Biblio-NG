export class Book {
  id: number;
  title: string;
  author: string;
  resume: string;
  picture: string;
  genre: Array<string>;
  available: boolean;
  loaningDate: Date;
}
