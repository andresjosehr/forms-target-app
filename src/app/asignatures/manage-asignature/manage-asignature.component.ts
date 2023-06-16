import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityComponent } from 'app/shared/generic-components/manage-entity/manage-entity.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Asignature } from '../asignature';
import { AsignatureService } from '../service/asignature.service';


  

  


@Component({
  selector: 'app-manage-asignature',
  templateUrl: './manage-asignature.component.html',
})
export class ManageAsignatureComponent extends ManageEntityComponent<Asignature> implements OnInit {

    asignatureFormGroup: FormGroup;
    
        
      
        
      

    constructor(
      protected _globalService: GlobalService,
		  protected _activateRoute: ActivatedRoute,
		  protected _formBuilder: FormBuilder,
		  protected _router: Router,
      protected _matSnackBar: MatSnackBar,
      protected _service: AsignatureService,
      
        
      
        
      
    ) {
        const entityFormGroup = _formBuilder.group({
            
            name: [],
          
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, 'Asignaturas', 'Asignatura');
    }

    ngOnInit(): void {
      
        
      
        
      
    }

    
      
    
      
    
}
