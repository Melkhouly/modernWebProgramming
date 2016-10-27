import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
    { id: 11, name: 'Cell Phone' },
    { id: 12, name: 'Cloths' },
    { id: 13, name: 'Labtop' },
    { id: 14, name: 'Head Phones' },
    { id: 15, name: 'Chairs' },
    { id: 16, name: 'Pans' },
    { id: 17, name: 'Shoes' },
    { id: 18, name: 'Glasses' },
    { id: 19, name: 'Charger' },
    { id: 20, name: 'Cups' }
    ];
    return {products};
  }
}
