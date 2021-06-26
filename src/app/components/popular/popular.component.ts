import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  property: any;
  loading = false;
  constructor(public service:MoviesService) { }

  ngOnInit(): void {
    this.loading = true;
setTimeout(() => {
  this.getPopular();
  this.loading = false;
}, 5000);

  }

  getPopular(){
    this.service.getAllPopular().subscribe(res => {
      console.log(res);
      this.property = res.results;
    })
  }



}



