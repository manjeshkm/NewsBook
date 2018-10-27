import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { News } from '../../News';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  query: String = '';
  news;
  constructor(private httpservice: HttpService) {
  }

  ngOnInit() {
    this.httpservice.getNews().subscribe((res: any) => {
    this.news = res.articles;
      console.log(res.articles);
    });
  }

  changeCategory(category: String) {
    console.log('cat:' + category);
    this.query = '';
    this.httpservice.getNewsByCategory(category).subscribe((res: any) => {
    this.news = res.articles;
      console.log(res.articles);
    });
  }

  newsByQuery() {
    this.httpservice.getNewsByQuery(this.query).subscribe((res: any) => {
    this.news = res.articles;
      console.log(res.articles);
    });
  }

}
