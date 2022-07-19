import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IdsInputComponent } from './ids-input.component';
import { ExampleComponent } from './demos/example/example.component';

const routes: Routes = [
  { 
    path: '',
    component: IdsInputComponent
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
export class IdsInputRoutingModule { }
