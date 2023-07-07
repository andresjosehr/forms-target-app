import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListModule } from './cars-list/cars-list.module';
import { Route, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { ManageCarModule } from './manage-car/manage-car.module';
import { ManageCarComponent } from './manage-car/manage-car.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Route[] = [
    {
        path: '',
        component: CarsListComponent,
    },
    {
        path: 'lista',
        component: CarsListComponent,
    },
    {
        path: 'crear',
        component: ManageCarComponent,
    },
    {
        path: 'editar/:id',
        component: ManageCarComponent,
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarsListModule,
    ManageCarModule,
    MatSnackBarModule
  ],
  providers: [
      MatSnackBarModule
  ]
})
export class CarsModule { }
