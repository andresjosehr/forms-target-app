import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageEntityLayout1Component } from 'app/shared/generic-components/manage-entity/manage-entity-layout-1.component';
import { GlobalService } from 'app/shared/services/global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
})
export class ManageProductComponent extends ManageEntityLayout1Component<Product> implements OnInit {
    productFormGroup: FormGroup;

    constructor(
      protected _globalService: GlobalService,
		  protected _activateRoute: ActivatedRoute,
		  protected _formBuilder: FormBuilder,
		  protected _router: Router,
      protected _matSnackBar: MatSnackBar,
      protected _service: ProductService,
      @Inject(MAT_DIALOG_DATA) public data: {id: string | null, requestEvent: Subject<boolean>},

    ) {
        const entityFormGroup = _formBuilder.group({
            name: [, [Validators.required]], // 3li6fds4cskk3yt7fm1w
            type: [, [Validators.minLength(3), Validators.minLength(3)]], // 0kq8kagopdbg7nwondlb
            price: [, [Validators.min(10)]], // al9duapn415l80smgd0p
            code: [, [Validators.maxLength(5)]], // rsmk8pq1ebcvja4whr7o
            stock: [false], // t3wugwp72exut56gx7pv
            offer: [], // nbc2mg4zvaftyyp1njk8
            photo: [], // 776b1omatnaow79g03qq
        });
        super(_globalService, _activateRoute, _formBuilder, _router, _matSnackBar, entityFormGroup, _service, data, 'Productoses', 'Productos');
    }
    ngOnInit(): void {
      this.afterRequest.subscribe((response) => {
        this.data.requestEvent.next(true);
      });

    }

}
