import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { EntitiesListComponent } from 'app/shared/generic-components/entities-list/entities-list.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Asignature } from '../asignature';
import { AsignatureService } from '../service/asignature.service';

@Component({
  selector: 'app-asignatures-list',
  templateUrl: './asignatures-list.component.html',
  styles: [`
    ::ng-deep .search-form .mat-mdc-text-field-wrapper{
        background-color: #fff;
    }
    ::ng-deep .search-form .mat-mdc-form-field-subscript-wrapper{
        display: none;
    }
  `]
})
export class AsignaturesListComponent extends EntitiesListComponent<Asignature>{

  columns: Array<string> = [ 'id', 'name', 'actions'];

  constructor(
    protected _activatedRoute: ActivatedRoute,
    protected _router: Router,
    protected _formBuilder: FormBuilder,
    protected _globalService: GlobalService,
    protected _userService: UserService,
    protected _service: AsignatureService,
    protected _fuseConfirmationService: FuseConfirmationService,
    protected _matSnackBar: MatSnackBar,
  ) {
    const searchFormGroup = _formBuilder.group({
        searchString: [],
          
            name: [],
          
    });
    super(_activatedRoute, _router, _formBuilder, _globalService, _userService, _fuseConfirmationService, _matSnackBar, searchFormGroup, _service, 'Asignaturas', 'Asignatura');
  }
}


