import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturesListModule } from './asignatures-list/asignatures-list.module';
import { Route, RouterModule } from '@angular/router';
import { AsignaturesListComponent } from './asignatures-list/asignatures-list.component';
import { ManageAsignatureModule } from './manage-asignature/manage-asignature.module';
import { ManageAsignatureComponent } from './manage-asignature/manage-asignature.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Route[] = [
    {
        path: '',
        component: AsignaturesListComponent,
    },
    {
        path: 'lista',
        component: AsignaturesListComponent,
    },
    {
        path: 'crear',
        component: ManageAsignatureComponent,
    },
    {
        path: 'editar/:id',
        component: ManageAsignatureComponent,
    }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AsignaturesListModule,
    ManageAsignatureModule,
    MatSnackBarModule
  ],
  providers: [
      MatSnackBarModule
  ]
})
export class AsignaturesModule { }
