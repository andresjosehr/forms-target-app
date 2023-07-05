import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonessListModule } from './phoness-list/phoness-list.module';
import { Route, RouterModule } from '@angular/router';
import { PhonessListComponent } from './phoness-list/phoness-list.component';
import { ManagePhonesModule } from './manage-phones/manage-phones.module';
import { ManagePhonesComponent } from './manage-phones/manage-phones.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Route[] = [
    {
        path: '',
        component: PhonessListComponent,
    },
    {
        path: 'lista',
        component: PhonessListComponent,
    },
    {
        path: 'crear',
        component: ManagePhonesComponent,
    },
    {
        path: 'editar/:id',
        component: ManagePhonesComponent,
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PhonessListModule,
    ManagePhonesModule,
    MatSnackBarModule
  ],
  providers: [
      MatSnackBarModule
  ]
})
export class PhonessModule { }
