export class Book {
  id: number;
  title: string;
  author: string;
  resume: string;
  picture: string;
  genres: Array<string>;
  available: boolean;
  loaningDate: Date;
}
