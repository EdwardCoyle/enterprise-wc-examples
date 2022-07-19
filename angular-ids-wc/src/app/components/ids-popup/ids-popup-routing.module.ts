import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsPopupComponent } from './ids-popup.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '', 
    component: IdsPopupComponent 
  },
  {
    path: 'example',
    component: ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdsPopupRoutingModule { }
