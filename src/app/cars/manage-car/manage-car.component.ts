import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityComponent } from 'app/shared/generic-components/manage-entity/manage-entity.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
      @Inject(MAT_DIALOG_DATA) public data: {id: string | null},

    ) {
        const entityFormGroup = _formBuilder.group({
            kilometraje: [, [Validators.max(100), Validators.max(100), Validators.min(10)]], // 3uidq53ivueagcfrbm39
            color: [], // oaa3rnfrhzrk33f9fesy
            placa: [], // wk471vrng3oquxnzbkbc
            owner: [], // sspe97d6bu819tilbypj
            asientos: [], // y2x4zsjiw3ngzsby5oey
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, data, 'Carros', 'Carro');
    }
    ngOnInit(): void {

    }

}
