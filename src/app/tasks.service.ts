import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  editButtonDisplayed =false;
  // added tasks
  tasks:any[] = [
    {
      id:'tt2vyqhnzir',
      title: 'title1',
      periority: 'medium',
      due_date: [new Date('Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)'),new Date('Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)')],
      reminder_date: '2021-11-17T14:19:45.457Z',
      assigne: ['ramy moahmed' ,'ahmed mohamed', 'khaled anwer','ahmed said'],
      follow_up: ['followUp 1','followUp 2','followUp 3','followUp 4'],
      bussiness_unit: ['bussiness_unit 1','bussiness_unit 2','bussiness_unit 3','bussiness_unit 4'],
      department: ['department 1','department 2','department 3','department 4','department 5','department 6'],
      description: 'dksvkdsn vssdvnks dsvklnvvsdvd dvslnksdv sdn',
    },
    {
      id:'zbctw30sgbc',
      title: 'title2',
      periority: 'medium',
      due_date: [new Date('Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)'),new Date('Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)')],
      reminder_date: '2021-11-17T14:19:45.457Z',
      assigne: ['ramy moahmed' ,'ahmed mohamed', 'khaled anwer','ahmed said'],
      follow_up: ['followUp 1','followUp 2','followUp 3','followUp 4'],
      bussiness_unit: ['bussiness_unit 1','bussiness_unit 2','bussiness_unit 3','bussiness_unit 4'],
      department: ['department 1','department 2','department 3','department 4','department 5','department 6'],
      description: 'dksvkdsn vssdvnks dsvklnvvsdvd dvslnksdv sdn',
    },
  ];
  currentTask: Task= {
      id:'',
      title: '',
      periority: [],
      due_date: [],
      reminder_date: '',
      assigne: [],
      follow_up: [],
      bussiness_unit: [],
      department: [],
      description: '',
    };

  tasksChanged: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.tasks);
  taskUpdated: BehaviorSubject<Task> = new BehaviorSubject<Task>(this.currentTask);
  editButtonUpdated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.editButtonDisplayed);




  constructor(){
    this.tasksChanged.subscribe((value) => {
        this.tasks = value
    });

    this.taskUpdated.subscribe((value) => {
        this.currentTask = value
    });

    this.editButtonUpdated.subscribe((value) => {
        this.editButtonDisplayed = value
    });

  }


  getTasks(){
    return this.tasks;
  }

  generateUniqueID(){
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    const length = (head + tail).length;
    return (head + tail).slice((length/2)- 1 , length);
  }

  deleteTask(task:Task){
    let newTasks = this.tasks.filter((t:any)=> t.id !== task.id)
    this.tasksChanged.next(newTasks);
    console.log(this.tasks);
  }

  editTask(task:Task){
    this.currentTask = task;
    this.taskUpdated.next(this.currentTask);

  }

  showEditButton(){
    this.editButtonUpdated.next(true);
  }


  hideEditButton(){
    this.editButtonUpdated.next(false);
  }
}
