import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  // added tasks
  tasks:any[] = [
    {
      id:'tt2vyqhnzir',
      title: 'title1',
      periority: 'medium',
      due_date: 'Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time),Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)',
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
      due_date: 'Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time),Thu Apr 01 2021 00:00:00 GMT+0200 (Eastern European Standard Time)',
      reminder_date: '2021-11-17T14:19:45.457Z',
      assigne: ['ramy moahmed' ,'ahmed mohamed', 'khaled anwer','ahmed said'],
      follow_up: ['followUp 1','followUp 2','followUp 3','followUp 4'],
      bussiness_unit: ['bussiness_unit 1','bussiness_unit 2','bussiness_unit 3','bussiness_unit 4'],
      department: ['department 1','department 2','department 3','department 4','department 5','department 6'],
      description: 'dksvkdsn vssdvnks dsvklnvvsdvd dvslnksdv sdn',
    },
  ];

  tasksChanged: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.tasks);

  constructor(){
    this.tasksChanged.subscribe((value) => {
        this.tasks = value
    });
  }

  getTasks(){
    return this.tasks;
  }

  getTasksChanged(){
   return this.tasksChanged.asObservable;
  }


  generateUniqueID(){
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    const length = (head + tail).length;

    return (head + tail).slice((length/2)- 1 , length);
  }




  deleteTasks(task:any){
    let newTasks = this.tasks.filter((t:any)=> t.id !== task.id)
    this.tasksChanged.next(newTasks);
    console.log(this.tasks);
  }
}
