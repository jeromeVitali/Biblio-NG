import { BOOKS } from './books/mock/booksMock';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = BOOKS;
    return { books };
  }
}
