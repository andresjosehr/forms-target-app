import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityComponent } from 'app/shared/generic-components/manage-entity/manage-entity.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Car } from '../car';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-manage-car',
  templateUrl: './manage-car.component.html',
})
export class ManageCarComponent extends ManageEntityComponent<Car> implements OnInit {
    carFormGroup: FormGroup;

    constructor(
      protected _globalService: GlobalService,
		  protected _activateRoute: ActivatedRoute,
		  protected _formBuilder: FormBuilder,
		  protected _router: Router,
      protected _matSnackBar: MatSnackBar,
      protected _service: CarService,

    ) {
        const entityFormGroup = _formBuilder.group({
            kilometraje: [, [Validators.min(10), Validators.max(100), Validators.required]], // 3uidq53ivueagcfrbm39
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, 'Carro 2es', 'Carro 2');
    }
    ngOnInit(): void {

    }

}
