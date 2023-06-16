import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageAsignatureComponent} from './manage-asignature.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {DateModule} from 'app/shared/date.module';



@NgModule({
  declarations: [
    ManageAsignatureComponent
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
  ]
})
export class ManageAsignatureModule { }
