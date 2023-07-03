import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { EntitiesListComponent } from 'app/shared/generic-components/entities-list/entities-list.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Car } from '../car';
import { CarService } from '../service/car.service';
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
  `]
})
export class CarsListComponent extends EntitiesListComponent<Car>{
  columns: Array<string> = [ 'id', 'kilometraje', 'actions'];
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    protected _globalService: GlobalService,
    protected _userService: UserService,
    protected _service: CarService,
    protected _fuseConfirmationService: FuseConfirmationService,
    protected _matSnackBar: MatSnackBar,
  ) {
    const searchFormGroup = _formBuilder.group({
        searchString: [],
            kilometraje: [], // 3uidq53ivueagcfrbm39
    });
    super(_activatedRoute, _router, _formBuilder, _globalService, _userService, _fuseConfirmationService, _matSnackBar, searchFormGroup, _service, 'Carro 2es', 'Carro 2');
  }
  getFileCounts(files: string): number{
    if(!files){
      return 0
    }
    return JSON.parse(files).length
  }
}
