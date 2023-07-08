/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseAlertType } from '@fuse/components/alert';
import { HttpValidationErrorResponse } from 'app/interfaces/http-responses/http-validation-error-response';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-manage-entity',
    template: '',
})
export class ManageEntityLayout1Component<Entity> {
    afterRequest: Subject<any> = new Subject();
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    showAlert: boolean = false;
    entityID: string = '';
    dasherizedEntity: string;
    file;

    constructor(
        protected _globalService: GlobalService,
        protected _activateRoute: ActivatedRoute,
        protected _formBuilder: FormBuilder,
        protected _router: Router,
        protected _matSnackBar: MatSnackBar,
        @Inject('entityFormGroup') protected entityFormGroup: FormGroup,
        @Inject('service') protected _service: any,
        @Inject('string') protected data: {id: string | null},
        @Inject('string') protected _pluralEntity: string,
        @Inject('string') protected _singularEntity: any
    ) {
        if(data.id){
            this.entityID = data.id;
            this.getEntity();
        }
        this.dasherizedEntity = this._globalService.dasherize(this._pluralEntity);
    }

    getEntity(): void {
        this._service.get(this.entityID).subscribe((response) => {
            this.entityFormGroup.patchValue(response.data);
        });
    }

    createEntity(): void {

        if(this.thereAreFormErrors()){
            return;
        }

        this._service.store(this.entityFormGroup.value)
            // takeUntil(this._unsubscribeAll)
            .pipe()
            .subscribe(
                (r) => {
                    this.afterRequest.next(r);
                    this.entityFormGroup.enable();
                    // navigate with query params
                    // this._router.navigate([`/${this.dasherizedEntity}/lista`,{ m: 1 }]);
                    this._globalService.openSnackBar(this._matSnackBar, `${this._singularEntity} creado correctamente`, 2500, 'success' );
                    this.entityID = r.data.id;

                },
                (response: HttpValidationErrorResponse) => this.handleErrorRequestError(response)
            );
    }

    updateEntity(): void {

        if(this.thereAreFormErrors()){
            return;
        }

        // Sign in
        this._service
            .update(this.entityID, this.entityFormGroup.value).pipe().subscribe((r) => {
                    this.afterRequest.next(r);
                    this.entityFormGroup.enable();
                    this._globalService.openSnackBar(this._matSnackBar, `${this._singularEntity} actualizado correctamente`, 2500, 'success' );
                },
                (response: HttpValidationErrorResponse) => this.handleErrorRequestError(response)
            );
    }

    thereAreFormErrors(): boolean{

        const invalid = [];
        const controls = this.entityFormGroup.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }

        // Return if the form is invalid
        if (this.entityFormGroup.invalid) {
            this.entityFormGroup.setValue(this.entityFormGroup.value);

            this.entityFormGroup.markAllAsTouched();
            this.entityFormGroup = this._globalService.getValidationErrorsFront(
                this.entityFormGroup
            );
            this._globalService.openSnackBar(this._matSnackBar, 'Hay errores en el formulario', 2500, 'error' );

            return true;
        }

        // Disable the form
        this.entityFormGroup.disable();
        this.entityFormGroup.updateValueAndValidity();

        // Hide the alert
        this.showAlert = false;

        return false
    }

    handleErrorRequestError(response): void {
        this.entityFormGroup.enable();

        if ( response.message === this._globalService.httpValidationErrorMessage ) {
            this.entityFormGroup = this._globalService.getValidationErrors( this.entityFormGroup, response );

            // Set the alert
            this.alert = {type: 'error',message: `${response.message}`};

            // Show the alert
            this.showAlert = true;
        }
    }
}
