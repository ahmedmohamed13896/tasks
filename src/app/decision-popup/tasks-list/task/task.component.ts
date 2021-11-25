import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksService } from './../../../tasks.service';
import { Task } from './../../../interfaces/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {
    id: '',
    title: '',
    periority: [],
    due_date: [],
    reminder_date: '',
    assigne: [],
    follow_up: [],
    bussiness_unit: [],
    department: [],
    description: '',
  };;

  tasks: any[] = [];
  arrowClass: string = 'fa-chevron-circle-down';
  currentTask = {};

  // use this for update Task
  currentTaskSub = new Subscription();
  editButtonDisplayed = false;

  constructor(private tasksService:TasksService) { }


  ngOnInit(): void {
    this.tasksService.tasksChanged.subscribe((value)=>{
      this.tasks = value;
    });

    this.currentTaskSub =  this.tasksService.taskUpdated.subscribe((res)=>{
      this.currentTask = res;
    });

    this.tasksService.editButtonUpdated.subscribe((res)=>{
      this.editButtonDisplayed = res;
    });
  }

  toggleTask() {
    this.arrowClass = this.arrowClass == 'fa-chevron-circle-down' ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down';
  }

  deleteTask($event:Event) {
    this.tasksService.deleteTask(this.task);
    $event.stopPropagation();
  }

  stopPropagation(event:Event){
    event.stopPropagation();
  }

  editTask($event:Event) {
    this.tasksService.editButtonDisplayed = true;
    this.tasksService.editTask(this.task);
    this.tasksService.showEditButton();
    $event.stopPropagation();
  }

}
