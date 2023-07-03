import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageCarComponent} from './manage-car.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {DateModule} from 'app/shared/date.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FileInputModule} from 'app/shared/file-input/file-input.module';

@NgModule({
  declarations: [
    ManageCarComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
		MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DateModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    FileInputModule
  ]
})
export class ManageCarModule { }
