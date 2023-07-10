import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Client } from 'app/interfaces/entities/client';
import { ClientsService } from 'app/shared/services/clients/clients.service';
import { OrdersService } from '../service/orders.service';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';







    import { ProductsListComponent } from 'app/forms-1/products/products-list/products-list.component';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    columns = [ 'amount', 'payment_type', 'product', 'actions'];
    client;
    components = {






          'product': {com: ProductsListComponent, col:  'name'   },


    };

    formGroup: FormGroup;
    constructor(
        private _clientsService: ClientsService,
        private _globalService: GlobalService,
        private _matSnachBar: MatSnackBar,
        private _matDialog: MatDialog,
        private _formBuilder: FormBuilder,
        protected _service: OrdersService,
    ) { }

    ngOnInit(): void {
        this.formGroup = this._formBuilder.group({
          id: [],
          client_id: [],

            amount: [], // m9apbo0te3w7s3x2ppni


            payment_type: [], // emzvxkpj0kxfvlmxmdoi


            product: [], // mt7h7f1rvzzjvgsn14zu

              productToShow: []


        });
    }


    selectEntity(entityName, fieldName) {
        const dialogRef = this._matDialog.open(this.components[entityName].com, {
            data: {
                isChild: true
            }
        });



        dialogRef.afterClosed().subscribe(result => {
            this.formGroup.get(fieldName).setValue(result[this.components[entityName].col]);
            this.formGroup.get(entityName).setValue(result.id);
        });
      }

      store(): void{

        this._service.store(this.formGroup.value).subscribe((response: any) => {

            this.formGroup.reset();

            this._globalService.openSnackBar(this._matSnachBar, response.message);
            this.selectClient(this.client);
        });
      }

      update(): void{

        this._service.update(this.formGroup.value.id, this.formGroup.value).subscribe((response: any) => {

            this.formGroup.reset();

            this._globalService.openSnackBar(this._matSnachBar, response.message);
            this.selectClient(this.client);
        });
      }

    selectClient(client){
        this.client = client;
        this.formGroup.reset();
        this.formGroup.get('client_id').setValue(client.id);
        this._clientsService.get(client.id).subscribe((response: any) => {
            this.client = response.data;
        });
    }

    delete(id: number): void{
        this._service.destroy(id).subscribe((response: any) => {
            this.client.orders = this.client.orders.filter((order) => order.id !== id);
            this._globalService.openSnackBar(this._matSnachBar, response.message);
        });
    }

    edit(id: string): void{
        this._service.get(id).subscribe((response: any) => {
            this.formGroup.patchValue(response.data);
            console.log(response);
            this.formGroup.get('productToShow').setValue(response.data.product.name);
        });
    }
}

