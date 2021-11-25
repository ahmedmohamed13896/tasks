import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from './../../../tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any = {};

  tasks: any[] = [];
  arrowClass: string = 'fa-chevron-circle-down';


  constructor(private TasksService:TasksService) { }
  ngOnInit(): void {
    this.TasksService.tasksChanged.subscribe((value)=>{
      this.tasks = value;
    });
  }

  toggleTask() {
    this.arrowClass = this.arrowClass == 'fa-chevron-circle-down' ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down';
  }

  deleteTask($event:Event) {
    this.TasksService.deleteTasks(this.task);
    $event.stopPropagation();
  }

}
