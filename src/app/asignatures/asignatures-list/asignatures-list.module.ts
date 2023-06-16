import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturesListComponent } from './asignatures-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {DateModule} from 'app/shared/date.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AsignaturesListComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule,
    MatButtonModule,
    DateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AsignaturesListModule { }
