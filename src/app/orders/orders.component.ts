import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { Client } from 'app/interfaces/entities/client';
import { ClientsService } from 'app/shared/services/clients/clients.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { OrdersService } from './service/orders.service';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarsListComponent } from 'app/cars/cars-list/cars-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

    columns = ['sell_code', 'price', 'amount', 'car_id', 'actions'];
    client;

    orderFG: FormGroup;

    constructor(
        private _clientsService: ClientsService,
        private _orderService: OrdersService,
        private _globalService: GlobalService,
        private _matSnachBar: MatSnackBar,
        private _matDialog: MatDialog,
        private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.orderFG = this._formBuilder.group({
            id: [''],
            client_id: [''],
            sell_code: [''],
            price: [''],
            amount: [''],
            car_id: [''],
            car: [''],
        });
    }


    selectEntity(entityName) {
        const dialogRef = this._matDialog.open(CarsListComponent, {
            data: {
                isChild: true
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.orderFG.get(entityName).setValue(result.name);
            this.orderFG.get('car_id').setValue(result.id);
        });
      }

      store(): void{

        this._orderService.store(this.orderFG.value).subscribe((response: any) => {

            this.orderFG.reset();

            this._globalService.openSnackBar(this._matSnachBar, response.message);
            this.selectClient(this.client);
        });
      }

      update(): void{

        this._orderService.update(this.orderFG.value.id, this.orderFG.value).subscribe((response: any) => {

            this.orderFG.reset();

            this._globalService.openSnackBar(this._matSnachBar, response.message);
            this.selectClient(this.client);
        });
      }

    selectClient(client){
        this.client = client;
        this.orderFG.reset();
        this.orderFG.get('client_id').setValue(client.id);
        this._clientsService.get(client.id).subscribe((response: any) => {
            this.client = response.data;
        });
    }

    delete(id: number): void{
        this._orderService.destroy(id).subscribe((response: any) => {
            this.client.orders = this.client.orders.filter((order) => order.id !== id);
            this._globalService.openSnackBar(this._matSnachBar, response.message);
        });
    }

    edit(id: string): void{
        this._orderService.get(id).subscribe((response: any) => {
            this.orderFG.patchValue(response.data);
            this.orderFG.get('car').setValue(response.data.car.name);
        });
    }
}

