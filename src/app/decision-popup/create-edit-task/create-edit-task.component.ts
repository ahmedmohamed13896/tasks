import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.scss']
})
export class CreateEditTaskComponent implements OnInit {
  activeTab: string = 'tasks';
  arrow: string = 'up';
  isOpened = true;

  addedTasks:any[] =[];
  // task data
  task: any = {
    title: '',
    periority: [
      { id: 1, name: 'high' },
      { id: 2, name: 'medium' },
      { id: 3, name: 'low' },
    ],
    due_date: '',
    remider_date: '',
    assigne: [
      { id: 1, name: 'ahmed'},
      { id: 2, name: 'mohamed'},
      { id: 3, name: 'anwer'},
      { id: 4, name: 'khaled'},
      { id: 5, name: 'omar'},
      { id: 6, name: 'mahmoud'},
      { id: 7, name: 'ramy'},
    ],
    follow_up: [
      { id: 1, name: 'followUp 1', },
      { id: 2, name: 'followUp 2', },
      { id: 3, name: 'followUp 3', },
      { id: 4, name: 'followUp 4', },
      { id: 5, name: 'followUp 5', },
    ],
    bussiness_unit: [
      { id: 1, name: 'bussiness_unit1' },
      { id: 2, name: 'bussiness_unit2' },
      { id: 3, name: 'bussiness_unit3' },
      { id: 4, name: 'bussiness_unit4' },
      { id: 5, name: 'bussiness_unit5' },
    ],
    department: [
      { id: 1, name: 'department1'},
      { id: 2, name: 'department2'},
      { id: 3, name: 'department3'},
      { id: 4, name: 'department4'},
      { id: 5, name: 'department5'},
    ],
    description: '',
  };

  // form validation
  addTaskForm = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    periority: new FormControl(null,[Validators.required]),
    due_date: new FormControl(null,[Validators.required]),
    reminder_date: new FormControl(null,[]),
    assigne: new FormControl(null,[Validators.required]),
    follow_up: new FormControl(null,[Validators.required]),
    bussiness_unit: new FormControl(null,[Validators.required]),
    department: new FormControl(null,[Validators.required]),
    description:new FormControl(null,[])
  })

  tasksListSub = new Subscription();

  constructor(private tasksService : TasksService) { }

  ngOnInit(): void {
    this.tasksListSub =  this.tasksService.tasksChanged.subscribe((res)=>{
      this.addedTasks = res;
    })
  }


  addTask(){
    if(this.addTaskForm.valid){
      this.addedTasks.push(this.addTaskForm.value)
      console.log(this.addedTasks);

      this.addedTasks[this.addedTasks.length - 1].id =  this.tasksService.generateUniqueID();
      this.addTaskForm.reset();
    }
  }

  clearForm(){
    this.addTaskForm.reset();
  }

  toggleForm() {
    this.arrow = this.arrow == 'up' ? 'down' : 'up';
  }

}
