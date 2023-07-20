import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebasListModule } from './pruebas-list/pruebas-list.module';
import { Route, RouterModule } from '@angular/router';
import { PruebasListComponent } from './pruebas-list/pruebas-list.component';
import { ManagePruebaModule } from './manage-prueba/manage-prueba.module';
import { ManagePruebaComponent } from './manage-prueba/manage-prueba.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Route[] = [
    {
        path: '',
        component: PruebasListComponent,
    },
    {
        path: 'lista',
        component: PruebasListComponent,
    },
    {
        path: 'crear',
        component: ManagePruebaComponent,
    },
    {
        path: 'editar/:id',
        component: ManagePruebaComponent,
    }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PruebasListModule,
    ManagePruebaModule,
    MatSnackBarModule
  ],
  providers: [
      MatSnackBarModule
  ]
})
export class PruebasModule { }
