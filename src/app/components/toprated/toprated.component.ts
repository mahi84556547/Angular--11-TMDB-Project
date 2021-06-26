import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {
  toprated: any;
loading= false;
  constructor(public service:MoviesService) { }

  ngOnInit(): void {

this.loading = true;
    setTimeout(() => {
      this.getTop();
     this.loading= false;
    }, 4000);

  }

getTop(){
  this.service.getAllRated().subscribe(res =>{
    this.toprated = res.results;
  })
}

}
