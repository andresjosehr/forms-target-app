import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
// import { Client } from 'app/interfaces/entities/client';
import { ClientsService } from 'app/shared/services/clients/clients.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

    @Output() clientSelected: EventEmitter<any> = new EventEmitter();

    client: any;
    avoidRequest = false;
    dataSource;
    columns;
    clientFG;

    options = {
        first_name: [],
        last_name: [],
        dni: [],
        client_code: [],
        address: [],
        neighborhood: [],
        city: [],
        phone: [],
        campaign: [],
        zip_code: [],
        quota: [],
        balance: [],
        available_points: [],
    }

    constructor(
        public _clientsService: ClientsService,
        public _formsBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.clientFG = this._formsBuilder.group({
            first_name: [''],
            last_name: [''],
            dni: [''],
            client_code: [''],
            address: [''],
            neighborhood: [''],
            city: [''],
            phone: [''],
            campaign: [''],
            zip_code: [''],
            quota: [''],
            balance: [''],
            available_points: ['']
        });

        Object.entries(this.clientFG.controls).forEach(([k, c]: [string, FormControl]) => {
            c.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((v) => {
                if(!this.client && !this.avoidRequest){
                    this._clientsService.getList({[k]: v}).subscribe((res) => {
                        this.options[k] = res.data;
                    });
                }
            })
        })
    }

    selectOption(option) {

        this.client = option;
        this.clientSelected.emit(option);
        this.clientFG.disable();
        this.clientFG.patchValue(option, {emitEvent: false});

    }

    removeClient() {
        this.avoidRequest = true;
        this.client = null;
        this.clientSelected.emit(null);
        this.clientFG.enable();
        this.clientFG.reset();

        setTimeout(() => this.avoidRequest = false , 301);
    }

}
