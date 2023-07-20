import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityLayout1Component } from 'app/shared/generic-components/manage-entity/manage-entity-layout-1.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { Prueba } from '../prueba';
import { PruebaService } from '../service/prueba.service';


  


@Component({
  selector: 'app-manage-prueba',
  templateUrl: './manage-prueba.component.html',
})
export class ManagePruebaComponent extends ManageEntityLayout1Component<Prueba> implements OnInit {

    pruebaFormGroup: FormGroup;
    
        
      

    constructor(
      protected _globalService: GlobalService,
		  protected _activateRoute: ActivatedRoute,
		  protected _formBuilder: FormBuilder,
		  protected _router: Router,
      protected _matSnackBar: MatSnackBar,
      protected _service: PruebaService,
      @Inject(MAT_DIALOG_DATA) public data: {id: string | null, requestEvent: Subject<boolean>},
      
        
      
    ) {
        const entityFormGroup = _formBuilder.group({
           
            name: [], // 6hn07ds56reaf9owoumq
          
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, data, 'Pruebas', 'Prueba');
    }

    ngOnInit(): void {

      this.afterRequest.subscribe((response) => {
        this.data.requestEvent.next(true);
      });

      
        
      
    }

    
      
    
}
