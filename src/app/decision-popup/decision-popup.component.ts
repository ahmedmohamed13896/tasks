import { Component, OnInit } from '@angular/core';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-decision-popup',
  templateUrl: './decision-popup.component.html',
  styleUrls: ['./decision-popup.component.scss'],
})
export class DecisionPopupComponent implements OnInit {
  activeTab: string = 'tasks';
  addedTasks:any[] = [];

  constructor(private TasksService:TasksService) {}

  ngOnInit() {
    this.addedTasks = this.TasksService.getTasks();
  }

}
