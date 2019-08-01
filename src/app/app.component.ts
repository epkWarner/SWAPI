import { Component } from '@angular/core';
import { SWAPIService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWAPI';
  res: JSON;
  categories:string[]=['films','people','planets','species','starships','vehicles']

  constructor(
    private swapi: SWAPIService
  ){}

  search(wookie: boolean = false, term?:string, category?:string):void{
    this.swapi.search(wookie, term, category).subscribe(res=>this.res=res)
  }

}
