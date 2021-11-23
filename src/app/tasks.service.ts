import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:any =[];
  url:string = "../assets/server/data.json"
  constructor(private http :HttpClient) { }

  getTasks(){
    return this.http.get(this.url);
  }
}
