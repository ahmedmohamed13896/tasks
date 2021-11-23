import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: any = {};
  @Input() tasks: any[] = [];

  arrowClass: string = 'fa-chevron-circle-up';


  constructor() { }

  ngOnInit(): void {
  }

  toggleTask() {
    this.arrowClass = this.arrowClass == 'fa-chevron-circle-down' ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down';
  }

}
