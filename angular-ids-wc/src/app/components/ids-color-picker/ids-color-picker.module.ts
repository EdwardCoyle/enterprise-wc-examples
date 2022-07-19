import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdsColorPickerRoutingModule } from './ids-color-picker-routing.module';
import { IdsColorPickerComponent } from './ids-color-picker.component';
import { ExampleComponent } from './demos/example/example.component';
import { ExampleSizesComponent } from './demos/example-sizes/example-sizes.component';
import { AxeComponent } from './demos/axe/axe.component';


@NgModule({
  declarations: [
    IdsColorPickerComponent,
    ExampleComponent,
    ExampleSizesComponent,
    AxeComponent
  ],
  imports: [
    CommonModule,
    IdsColorPickerRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class IdsColorPickerModule { }
