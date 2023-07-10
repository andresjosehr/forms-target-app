import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListModule } from './products-list/products-list.module';
import { Route, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ManageProductModule } from './manage-product/manage-product.module';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Route[] = [
    {
        path: '',
        component: ProductsListComponent,
    },
    {
        path: 'lista',
        component: ProductsListComponent,
    },
    {
        path: 'crear',
        component: ManageProductComponent,
    },
    {
        path: 'editar/:id',
        component: ManageProductComponent,
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductsListModule,
    ManageProductModule,
    MatSnackBarModule
  ],
  providers: [
      MatSnackBarModule
  ]
})
export class ProductsModule { }
