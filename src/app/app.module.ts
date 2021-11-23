import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecisionPopupComponent } from './decision-popup/decision-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TasksListComponent } from './decision-popup/tasks-list/tasks-list.component';
import { ApprevPipe } from './apprev.pipe';
import { TaskComponent } from './decision-popup/tasks-list/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    DecisionPopupComponent,
    TasksListComponent,
    ApprevPipe,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    NgSelectModule,
    AccordionModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
