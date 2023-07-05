import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { EntitiesListComponent } from 'app/shared/generic-components/entities-list/entities-list.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Phones } from '../phones';
import { PhonesService } from '../service/phones.service';
import { ManagePhonesComponent } from '../manage-phones/manage-phones.component';

@Component({
  selector: 'app-phoness-list',
  templateUrl: './phoness-list.component.html',
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
export class PhonessListComponent extends EntitiesListComponent<Phones>{
  columns: Array<string> = [ 'name', 'brand', 'actions'];
  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    protected _globalService: GlobalService,
    protected _userService: UserService,
    protected _service: PhonesService,
    protected _fuseConfirmationService: FuseConfirmationService,
    protected _matSnackBar: MatSnackBar,
    protected dialog: MatDialog
  ) {
    const searchFormGroup = _formBuilder.group({
        searchString: [],
            name: [], // 9y8kt5hifw3od8fz4nqy
            brand: [], // ilfbgdqi0b759bhr29k5
    });
    super(_activatedRoute, _router, _formBuilder, _globalService, _userService, _fuseConfirmationService, _matSnackBar, searchFormGroup, _service, 'Celulareses', 'Celulares');
  }
  getFileCounts(files: string): number{
    if(!files){
      return 0
    }
    return JSON.parse(files).length
  }
  manageEntity(id: string): void {
    const dialogRef = this.dialog.open(ManagePhonesComponent, {
        data: {
            id: id,
        },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getImages(files: string): string{
    return JSON.parse(files)[0]['fileBase64'];
  }
}
