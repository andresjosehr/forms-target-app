import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
// import { Client } from 'app/interfaces/entities/client';
import { ClientsService } from 'app/shared/services/clients/clients.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-clients-students',
  templateUrl: './clients-students.component.html'
})
export class ClientsStudentsComponent implements OnInit {

    dataSource;
    columns;
    client;

    constructor(
    ) { }

    ngOnInit(): void {
    }


    selectClient(client){
        this.client = client;
    }

}
