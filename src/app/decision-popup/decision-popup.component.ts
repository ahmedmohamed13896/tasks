import { Component, OnInit } from '@angular/core';
import { TasksService } from './../tasks.service';
import { Task } from './../interfaces/task';

@Component({
  selector: 'app-decision-popup',
  templateUrl: './decision-popup.component.html',
  styleUrls: ['./decision-popup.component.scss'],
})
export class DecisionPopupComponent implements OnInit {
  activeTab: string = 'tasks';
  addedTasks:Task[] = [];



  constructor(private tasksService:TasksService) {}

  ngOnInit() {
    // this.addedTasks = this.TasksService.getTasks();
    this.tasksService.tasksChanged.subscribe((value)=>{
      this.addedTasks = value;
    });

  }

}
