import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { EntitiesListComponent } from 'app/shared/generic-components/entities-list/entities-list.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Car } from '../car';
import { CarService } from '../service/car.service';
import { ManageCarComponent } from '../manage-car/manage-car.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styles: [`
    ::ng-deep .search-form .mat-mdc-text-field-wrapper{
        background-color: #fff;
    }
    ::ng-deep .search-form .mat-mdc-form-field-subscript-wrapper{
        display: none;
    }
    ::ng-deep .mat-mdc-table .mdc-data-table__row:not(.mdc-data-table__row--selected):hover{
        background: #e3e3e3 !important;
    }
  `]
})
export class CarsListComponent extends EntitiesListComponent<Car>{
  columns: Array<string> = [ 'id', 'kilometraje', 'color', 'placa', 'owner', 'asientos', 'actions'];
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    protected _globalService: GlobalService,
    protected _userService: UserService,
    protected _service: CarService,
    protected _fuseConfirmationService: FuseConfirmationService,
    protected _matSnackBar: MatSnackBar,
    protected dialog: MatDialog
  ) {
    const searchFormGroup = _formBuilder.group({
        searchString: [],
            kilometraje: [], // 3uidq53ivueagcfrbm39
            color: [], // oaa3rnfrhzrk33f9fesy
            placa: [], // wk471vrng3oquxnzbkbc
            owner: [], // sspe97d6bu819tilbypj
            asientos: [], // y2x4zsjiw3ngzsby5oey
    });
    super(_activatedRoute, _router, _formBuilder, _globalService, _userService, _fuseConfirmationService, _matSnackBar, searchFormGroup, _service, 'Carros', 'Carro');
  }
  getFileCounts(files: string): number{
    if(!files){
      return 0
    }
    return JSON.parse(files).length
  }
  manageEntity(id: string): void {
    const dialogRef = this.dialog.open(ManageCarComponent, {
        data: {
            id: id,
        },
        maxHeight: "90vh",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getImages(files: string): string{
    return JSON.parse(files)[0]['fileBase64'];
  }
}
