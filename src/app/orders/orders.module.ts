import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { DateModule } from 'app/shared/date.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ClientsModule } from 'app/clients/clients.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Route[] = [
    {
        path: '',
        component: OrdersComponent
    }
]

@NgModule({
  declarations: [ OrdersComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule,
    ClientsModule
  ]
})
export class OrdersModule { }
