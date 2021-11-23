import { DecisionPopupComponent } from './decision-popup/decision-popup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'tasks',pathMatch:'full' },
  {path:'decision',component:DecisionPopupComponent },
  {path:'tasks',component:DecisionPopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
