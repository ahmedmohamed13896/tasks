import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TasksService } from './../../tasks.service';
import { Task } from './../../interfaces/task';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.scss']
})
export class CreateEditTaskComponent implements OnInit {
  activeTab: string = 'tasks';
  arrow: string = 'up';
  isOpened = true;

  // use this for update task
  editButtonDisplayed = false;

  currentTask : Task = {
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
  };


  addedTasks:Task[] =[];
  // task data
  task: Task = {
    id: '',
    title: '',
    periority: [
      { id: 1, name: 'high' },
      { id: 2, name: 'medium' },
      { id: 3, name: 'low' },
    ],
    due_date: [],
    reminder_date: '',
    assigne: [
      { id: 1, name: 'ahmed' },
      { id: 2, name: 'mohamed' },
      { id: 3, name: 'anwer' },
      { id: 4, name: 'khaled' },
      { id: 5, name: 'omar' },
      { id: 6, name: 'mahmoud' },
      { id: 7, name: 'ramy' },
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
      { id: 1, name: 'department1' },
      { id: 2, name: 'department2' },
      { id: 3, name: 'department3' },
      { id: 4, name: 'department4' },
      { id: 5, name: 'department5' },
    ],
    description: '',
  };

  // form validation
  addTaskForm = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    periority: new FormControl(null,[Validators.required]),
    due_date: new FormControl([],[Validators.required]),
    reminder_date: new FormControl(null,[]),
    assigne: new FormControl(null,[Validators.required]),
    follow_up: new FormControl(null,[Validators.required]),
    bussiness_unit: new FormControl(null,[Validators.required]),
    department: new FormControl(null,[Validators.required]),
    description:new FormControl(null,[])
  });

  tasksListSub = new Subscription();
  // use this for update Task
  currentTaskSub = new Subscription();
  editButtonSub = new Subscription();


  constructor(private tasksService : TasksService) { }

  ngOnInit(): void {
    this.tasksListSub =  this.tasksService.tasksChanged.subscribe((res)=>{
      this.addedTasks = res;
    })

    this.currentTaskSub =  this.tasksService.taskUpdated.subscribe((res)=>{
      this.currentTask = res;
      this.addTaskForm.patchValue(this.currentTask);
    });

    this.editButtonSub = this.tasksService.editButtonUpdated.subscribe((res)=>{
      this.editButtonDisplayed = res;
    });



  }


  addTask(){
    if(this.addTaskForm.valid){
      this.addedTasks.push(this.addTaskForm.value)
      console.log(this.addedTasks);
      this.addedTasks[this.addedTasks.length - 1].id =  this.tasksService.generateUniqueID();
      this.addTaskForm.reset();
    }
  }

  updateTask(){
    let id = this.currentTask.id;

    this.addedTasks.forEach((task:Task ,index)=> {
      if(task.id == id){
        this.currentTask = this.addTaskForm.value;
        this.addedTasks[index] = this.currentTask;

        console.log(this.addedTasks[index] );

        this.tasksService.taskUpdated.next(this.currentTask);
        this.tasksService.tasksChanged.next(this.addedTasks);

        this.tasksService.hideEditButton();
        this.clearForm()
      }
    });
    console.log(this.tasksService.editButtonDisplayed);

  }

  clearForm(){
    this.addTaskForm.reset();
  }

  toggleForm() {
    this.arrow = this.arrow == 'up' ? 'down' : 'up';
  }

}
