import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  items = this.articleService.items;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
  }

}
