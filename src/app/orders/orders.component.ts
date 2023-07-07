import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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

    constructor(
        private _clientsService: ClientsService,
        private _orderService: OrdersService,
        private _globalService: GlobalService,
        private _matSnachBar: MatSnackBar,
        private _matDialog: MatDialog,
    ) { }

    ngOnInit(): void {
    }


    selectCar() {
        const dialogRef = this._matDialog.open(CarsListComponent);

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

    selectClient(client){
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
}

