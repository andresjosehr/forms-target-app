import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { EntitiesListLayout1Component } from 'app/shared/generic-components/entities-list/entities-list-layout-1.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
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
export class CarsListComponent extends EntitiesListLayout1Component<Car>{
  columns: Array<string> = [ 'name', 'actions'];
  isChild: boolean = false;
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    protected _globalService: GlobalService,
    protected _userService: UserService,
    protected _service: CarService,
    protected _fuseConfirmationService: FuseConfirmationService,
    protected _matSnackBar: MatSnackBar,
    protected dialog: MatDialog,
    public dialogRef: MatDialogRef<CarsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    const searchFormGroup = _formBuilder.group({
        searchString: [],
            name: [], // nintoziznxac9xsqqlww
    });
    super(_activatedRoute, _router, _formBuilder, _globalService, _userService, _fuseConfirmationService, _matSnackBar, searchFormGroup, _service, 'Carros', 'Carro');
    this.isChild = data.isChild;
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
            requestEvent: this.requestEvent
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
  selectEntity(entity: Car): void{
    this.dialogRef.close(entity);
  }
}
