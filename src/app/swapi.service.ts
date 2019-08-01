import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SWAPIService {
  baseUrl: string = 'https://swapi.co/api'
  constructor(
    private http: HttpClient
  ) { }

  search( wookie: boolean,term?: string, category?:string):Observable<any>{
    return this.http.get(this.urlBuilder(wookie, term, category))
  }

  private urlBuilder( wookie: boolean,term?: string, category?:string):string {
    let url: string
    url = category !== undefined ? `${this.baseUrl}/${category.trim()}`:this.baseUrl 
    url = term.trim() ? `${url}/?search=${term}`: url
    url= wookie ? term.trim() ? `${url}&format=wookiee`:`${url}/?format=wookiee`:url
    return url
  }
}
