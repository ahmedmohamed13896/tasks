import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TasksService } from './../../tasks.service';
import { Task } from './../../interfaces/task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.scss'],
})
export class CreateEditTaskComponent implements OnInit {
  activeTab: string = 'tasks';
  arrow: string = 'up';
  isOpened = true;

  // use this for update task
  editButtonDisplayed = false;

  currentTask: Task = {
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

  addedTasks: Task[] = [];
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
      { id: 1, name: 'followUp 1' },
      { id: 2, name: 'followUp 2' },
      { id: 3, name: 'followUp 3' },
      { id: 4, name: 'followUp 4' },
      { id: 5, name: 'followUp 5' },
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
    title: new FormControl(null, [Validators.required]),
    periority: new FormControl([], [Validators.required]),
    due_date: new FormControl([], [Validators.required]),
    reminder_date: new FormControl(null, []),
    assigne: new FormControl(null, [Validators.required]),
    follow_up: new FormControl(null, [Validators.required]),
    bussiness_unit: new FormControl(null, [Validators.required]),
    department: new FormControl(null, [Validators.required]),
    description: new FormControl(null, []),
  });

  tasksListSub = new Subscription();
  // use this for update Task
  currentTaskSub = new Subscription();
  editButtonSub = new Subscription();

  // store selected data
  selectedAssigne = [];
  selectedBussinessUnit = [];
  selectedFollowUp = [];
  selectedDepartments = [];

  constructor(private tasksService: TasksService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.tasksListSub = this.tasksService.tasksChanged.subscribe((res) => {
      this.addedTasks = res;
    });

    this.currentTaskSub = this.tasksService.taskUpdated.subscribe((res) => {
      this.currentTask = res;
      this.addTaskForm.patchValue(this.currentTask);
    });

    this.editButtonSub = this.tasksService.editButtonUpdated.subscribe(
      (res) => {
        this.editButtonDisplayed = res;
      }
    );
  }

  addTask() {
    if (this.addTaskForm.valid) {
      this.addedTasks.push(this.addTaskForm.value);
      console.log(this.addedTasks);
      this.addedTasks[this.addedTasks.length - 1].id =
        this.tasksService.generateUniqueID();
      this.addTaskForm.reset();
      this.showSuccess('Task Added Successfully!')
    }
  }

  updateTask() {
    let id = this.currentTask.id;

    for (let i = 0; i < this.addedTasks.length; i++) {
      if (this.addedTasks[i].id == id) {
        this.currentTask = this.addTaskForm.value;
        // assign id to currentTask
        this.currentTask.id = this.tasksService.generateUniqueID();
        this.addedTasks[i] = this.currentTask;

        this.tasksService.taskUpdated.next(this.currentTask);
        this.tasksService.tasksChanged.next(this.addedTasks);

        this.tasksService.hideEditButton();
        this.clearForm();
        i = this.addedTasks.length;
      }
    }

    this.showSuccess('Task Updated Successfully!');
  }

  cancleEdit() {
    this.tasksService.hideEditButton();
    this.clearForm();
  }

  clearForm() {
    this.addTaskForm.reset();
  }

  toggleForm() {
    this.arrow = this.arrow == 'up' ? 'down' : 'up';
  }

  updateAssigne(index: number) {
    this.selectedAssigne = this.selectedAssigne.filter(
      (assignee) => this.selectedAssigne.indexOf(assignee) != index
    );
  }

  updateFollowUp(index: number) {
    this.selectedFollowUp = this.selectedFollowUp.filter(
      (selectedFollowUp) =>
        this.selectedFollowUp.indexOf(selectedFollowUp) != index
    );
  }

  updateBussinessUnit(index: number) {
    this.selectedBussinessUnit = this.selectedBussinessUnit.filter(
      (BussinessUnit) =>
        this.selectedBussinessUnit.indexOf(BussinessUnit) != index
    );
  }

  updateDepartment(index: number) {
    this.selectedDepartments = this.selectedDepartments.filter(
      (department) => this.selectedDepartments.indexOf(department) != index
    );
  }


  // toaster
  showSuccess(message:string) {
    this.toastr.success(message);
  }

}
