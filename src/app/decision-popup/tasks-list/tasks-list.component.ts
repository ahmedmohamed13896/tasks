import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit,OnDestroy {
  tasksList: any[] = [];
  tasksListSub = new Subscription()

  constructor(private tasksService:TasksService) {}

  ngOnInit(): void {
    this.tasksListSub =  this.tasksService.tasksChanged.subscribe((res)=>{
      this.tasksList = res;
    })
  }
  ngOnDestroy(){
    console.log('coponent detstroied');

    this.tasksListSub.unsubscribe()
  }

}
