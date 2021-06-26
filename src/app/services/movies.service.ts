import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apikey: string;



  constructor(public _http: HttpClient) { }

  // getAllMovies(id:any):Observable<any>{
  //   const url = "https://api.themoviedb.org/3/movie/157336?api_key=2785a37c8d185499acc42007a565a149";
  //   return this._http.get(url + id);
  // }
  getUpComing() : Observable<any>  {
    const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=2785a37c8d185499acc42007a565a149";
    return this._http.get(url);
  }
  getAllPopular():Observable<any>{
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=2785a37c8d185499acc42007a565a149";
    return this._http.get(url);
  }

  getAllRated():Observable<any>{
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=2785a37c8d185499acc42007a565a149";
    return this._http.get(url);
  }


}//end tag
