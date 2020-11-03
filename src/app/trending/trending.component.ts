import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {


  items = [
    {
      title: 'item 1',
    },
    {
      title: 'item 2',
    },
    {
      title: 'item 3',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
