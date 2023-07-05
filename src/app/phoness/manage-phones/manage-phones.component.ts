import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityComponent } from 'app/shared/generic-components/manage-entity/manage-entity.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Phones } from '../phones';
import { PhonesService } from '../service/phones.service';

@Component({
  selector: 'app-manage-phones',
  templateUrl: './manage-phones.component.html',
})
export class ManagePhonesComponent extends ManageEntityComponent<Phones> implements OnInit {
    phonesFormGroup: FormGroup;

    constructor(
      protected _globalService: GlobalService,
		  protected _activateRoute: ActivatedRoute,
		  protected _formBuilder: FormBuilder,
		  protected _router: Router,
      protected _matSnackBar: MatSnackBar,
      protected _service: PhonesService,
      @Inject(MAT_DIALOG_DATA) public data: {id: string | null},

    ) {
        const entityFormGroup = _formBuilder.group({
            name: [, [Validators.required]], // 9y8kt5hifw3od8fz4nqy
            brand: [], // ilfbgdqi0b759bhr29k5
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, data, 'Celulareses', 'Celulares');
    }
    ngOnInit(): void {

    }

}
