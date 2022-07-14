import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// IDS Components
import { IdsSwaplistComponent } from './components/ids-swaplist/ids-swaplist.component';
import { IdsTagComponent } from './components/ids-tag/ids-tag.component';
import { IdsAccordionComponent } from './components/ids-accordion/ids-accordion.component';
import { IdsTooltipComponent } from './components/ids-tooltip/ids-tooltip.component';
import { IdsAccordionExampleComponent } from './components/ids-accordion/demos/ids-accordion-example/ids-accordion-example.component';
import { IdsAccordionDisabledComponent } from './components/ids-accordion/demos/ids-accordion-disabled/ids-accordion-disabled.component';
import { IdsAccordionIconComponent } from './components/ids-accordion/demos/ids-accordion-icon/ids-accordion-icon.component';
import { IdsAccordionNestedComponent } from './components/ids-accordion/demos/ids-accordion-nested/ids-accordion-nested.component';
import { IdsAccordionLpComponent } from './components/ids-accordion/ids-accordion-lp/ids-accordion-lp.component';
import { IdsAlertComponent } from './components/ids-alert/ids-alert.component';
import { IdsAlertExampleComponent } from './components/ids-alert/demos/ids-alert-example/ids-alert-example.component';
import { IdsCheckboxComponent } from './components/ids-checkbox/ids-checkbox.component';
import { IdsCheckboxExampleComponent } from './components/ids-checkbox/demos/ids-checkbox-example/ids-checkbox-example.component';
import { IdsColorPickerComponent } from './components/ids-color-picker/ids-color-picker.component';
import { IdsColorPickerExampleComponent } from './components/ids-color-picker/demos/ids-color-picker-example/ids-color-picker-example.component';
import { IdsDataLabelComponent } from './components/ids-data-label/ids-data-label.component';
import { IdsDataLabelExampleComponent } from './components/ids-data-label/demos/ids-data-label-example/ids-data-label-example.component';
import { IdsDatePickerComponent } from './components/ids-date-picker/ids-date-picker.component';
import { IdsDatePickerExampleComponent } from './components/ids-date-picker/demos/ids-date-picker-example/ids-date-picker-example.component';
import { IdsDropdownComponent } from './components/ids-dropdown/ids-dropdown.component';
import { IdsDropdownExampleComponent } from './components/ids-dropdown/demos/ids-dropdown-example/ids-dropdown-example.component';
import { IdsPopupComponent } from './components/ids-popup/ids-popup.component';
import { IdsPopupExampleComponent } from './components/ids-popup/demos/ids-popup-example/ids-popup-example.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    IdsSwaplistComponent,
    HomeComponent, 
    IdsTagComponent,
    IdsTooltipComponent,
    IdsAccordionComponent,
    IdsAccordionExampleComponent,
    IdsAccordionDisabledComponent,
    IdsAccordionIconComponent,
    IdsAccordionNestedComponent,
    IdsAccordionLpComponent,
    IdsAlertComponent,
    IdsAlertExampleComponent,
    IdsCheckboxComponent,
    IdsCheckboxExampleComponent,
    IdsColorPickerComponent,
    IdsColorPickerExampleComponent,
    IdsDataLabelComponent,
    IdsDataLabelExampleComponent,
    IdsDatePickerComponent,
    IdsDatePickerExampleComponent,
    IdsDropdownComponent,
    IdsDropdownExampleComponent,
    IdsPopupComponent,
    IdsPopupExampleComponent,
  ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
