import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  items = [
    {
      id: 'aaa',
      title: 'item 1',
    },
    {
      id: 'bbb',
      title: 'item 2',
    },
    {
      id: 'ccc',
      title: 'item 3',
    }
  ];


  constructor() { }

  getArticle(id: string) {
    return this.items.find(item => item.id === id);
  };

}
