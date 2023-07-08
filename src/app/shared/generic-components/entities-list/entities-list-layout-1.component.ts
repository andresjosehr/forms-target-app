import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/core/user/user.service';
import { PaginatorEvent } from 'app/interfaces/general/paginator-event';
import { PaginatorParams } from 'app/interfaces/general/paginator-params';
import { Subject, takeUntil } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from 'app/shared/services/global/global.service';
import { SearchObject } from 'app/shared/services/generic-service/generic-service.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entities-list',
  template: '',
})
export class EntitiesListLayout1Component<Entity> {
    requestEvent: Subject<boolean> = new Subject();
	dataSource: MatTableDataSource<any>;
	entitiesPaginated1: any;
    entitiesPaginated2: any;
	_unsubscribeAll: Subject<any> = new Subject<any>();
    m: '1' | '2';

    get searchTerms(): SearchObject{
        return Object.entries(this._searchFormGroup.value).reduce((acc, [key, value]) => {
            // if value is empty, don't add it to the search object
            if(value === '' || value === null || value === undefined){
                return acc;
            }
            // if value is not empty, add it to the search object
            return {...acc, [key]: value};

        }, {})
    }

  constructor(
    protected _activatedRoute: ActivatedRoute,
		protected _router: Router,
		protected _formBuilder: FormBuilder,
		protected _globalService: GlobalService,
		protected _userService: UserService,
        protected _fuseConfirmationService: FuseConfirmationService,
        protected _matSnackBar: MatSnackBar,
        @Inject('searchFG') protected _searchFormGroup: FormGroup,
        @Inject('service') protected _service: any,
        @Inject('string') protected _pluralEntity: string,
        @Inject('string') protected _singularEntity: any,
	) { }

  ngOnInit(): void {

    this.requestEvent.subscribe((response) => {
        this.getEntities({}, 3);
    });

	this._activatedRoute.params.pipe(takeUntil(this._unsubscribeAll)).subscribe((params) => {
		if (params.m) {
            if(params.m === '1'){
                this._globalService.openSnackBar(this._matSnackBar, `Registro creado creado correctamente`, 3000, 'success');
            }
            if(params.m === '2'){
                this._globalService.openSnackBar(this._matSnackBar, `Registro actualizado correctamente`, 3000, 'success');
            }
		}
	});
	this.getEntities({}, 3);
  }

	getEntities(paginatorParams: PaginatorParams = {page: 1, perPage: 10}, p: 1 | 2 | 3 ): void {
		this._service.getList(this.searchTerms, paginatorParams).subscribe((response: any) => {
            if(p === 1 || p === 3){
                this.dataSource = new MatTableDataSource(response.data.data);
                this.entitiesPaginated1 = response.data;
            }
            if(p === 2 || p === 3){
                this.entitiesPaginated2 = response.data;
            }
		});
	}


	goToEntity(id: string): void{
		this._router.navigate([this._pluralEntity, 'editar', id]);
	}

    confirmDestroy(id: string | number){
        const dialogRef = this._fuseConfirmationService.open({
			title: 'Atención',
			message: '¿Está seguro que desea eliminar este registro? Esta acción no se puede deshacer.',
			icon:{
				show: true,
				name: 'heroicons_outline:exclamation',
				color: 'warning',
			},
			actions: {
				confirm: {
					show: true,
					label: "Confirmar",
					color: "accent"
				},
				cancel: {
					show: true,
					label: "Cancelar"
				}
			},
			dismissible: true
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result === 'confirmed'){
                this.destroy(id);
            }
        });
    }

	destroy(id: string | number): void{
		this._service.destroy(id).subscribe((response) => {
			this._globalService.openSnackBar(this._matSnackBar, `${this._singularEntity} eliminado correctamente`, 5000, 'success');
			this.dataSource.data = this.dataSource.data.filter(contact => contact.id !== id);
		});
	}

    paginate(event: PaginatorEvent, p: 1 | 2): void {
		this.getEntities({page: event.pageIndex + 1, perPage: event.pageSize}, p);
	}

    makeSearch(p: 1 | 2): void{
        this.getEntities({page: 1, perPage: 10}, p);
    }
}
