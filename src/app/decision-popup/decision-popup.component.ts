import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-decision-popup',
  templateUrl: './decision-popup.component.html',
  styleUrls: ['./decision-popup.component.scss'],
})
export class DecisionPopupComponent implements OnInit {
  activeTab: string = 'tasks';
  arrow: string = 'up';
  isOpened = true;
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

  addedTasks:any[] = [
    // {
    //   title: 'dscassacsacsa',
    //   periority: 'medium',
    //   due_date: '2021-11-02T14:19:42.709Z',
    //   reminder_date: '2021-11-17T14:19:45.457Z',
    //   assigne: ['ramy moahmed' ,'ahmed mohamed', 'khaled anwer','ahmed said'],
    //   follow_up: ['followUp 1','followUp 2','followUp 3','followUp 4'],
    //   bussiness_unit: ['bussiness_unit 1','bussiness_unit 2','bussiness_unit 3','bussiness_unit 4'],
    //   department: ['department 1','department 2','department 3','department 4','department 5','department 6'],
    //   description: 'dksvkdsn vssdvnks dsvklnvvsdvd dvslnksdv sdn',
    // },
  ];

  addTaskForm = new FormGroup({
    title: new FormControl(null,[Validators.required]),
    periority: new FormControl(null,[Validators.required]),
    due_date: new FormControl(null,[Validators.required]),
    reminder_date: new FormControl(null,[]),
    assigne: new FormControl([],[Validators.required]),
    follow_up: new FormControl([],[Validators.required]),
    bussiness_unit: new FormControl([],[Validators.required]),
    department: new FormControl([],[Validators.required]),
    description:new FormControl(null,[])
  })

  constructor() {}

  ngOnInit() {}


  addTask(){
    this.addedTasks.push(this.addTaskForm.value)
    console.log(this.addedTasks);
  }

  clearForm(){
    for (let feild in this.addTaskForm.controls) {
      if(['periority','title','due_date','reminder_date','description'].includes(feild)){
        this.addTaskForm.controls[feild].setValue(null);
      }
      else{
        this.addTaskForm.controls[feild].setValue([]);
      }
    }
  }


  toggleForm() {
    this.arrow = this.arrow == 'up' ? 'down' : 'up';
  }
}
