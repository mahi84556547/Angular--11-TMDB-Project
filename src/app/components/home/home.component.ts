import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upcoming: any;


  constructor(public service: MoviesService, private router: ActivatedRoute) { }

  ngOnInit() {
this.getUp();
  }

  getUp(){
    this.service.getUpComing().subscribe(res => {
      console.log(res);
      this.upcoming = res.results;
    })
  }



  }
