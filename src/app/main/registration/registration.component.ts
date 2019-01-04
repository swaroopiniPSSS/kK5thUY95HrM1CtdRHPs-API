import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { RegistrationService } from '../_services/index';
import { ScreenMode, Registration } from '../_models';



@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

    form: FormGroup;
    displayedColumns: string[] = ['company', 'firstName', 'lastName', 'address', 'city', 'state', 'postalCode', 'country', 'view', 'edit', 'delete'];

    dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    private _unsubscribeAll: Subject<any>;

    objScreenMode: ScreenMode;
    objRegistrationData: Registration;

    constructor(
        private _formBuilder: FormBuilder,
        private registrationService: RegistrationService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

        this.objScreenMode = ScreenMode.ADD;

        this.form = this._formBuilder.group({
            company: [
                {
                    value: 'Company Name',
                    disabled: true
                }, Validators.required
            ],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            postalCode: ['', [Validators.required, Validators.maxLength(6)]],
            country: ['', Validators.required]
        });

    }


    loadAllValuesFromAPI() {
        let dataValues = [];
        this.registrationService.getAll()
            .subscribe(data => {
                dataValues = data;
                this.dataSource = new MatTableDataSource(dataValues);
                this.dataSource.paginator = this.paginator;
            });
    }

    loadSelectedValuesFromAPI(id) {
        this.registrationService.getById(id)
            .subscribe(data => {
                // this.objRegistrationData = data;
                this.form = this._formBuilder.group({
                    id: data.id,
                    company: data.company,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    city: data.city,
                    state: data.state,
                    postalCode: data.postalCode,
                    country: data.country
                });
            });
    }

    ngGetAll() {
        try {
            this.loadAllValuesFromAPI();
        } catch (e) {
            console.error(e);
        }
    }

    ngGetById(id, mode) {
        this.objScreenMode = mode;
        try {
            this.loadSelectedValuesFromAPI(id);
        } catch (e) {
            console.error(e);
        }
    }

    // Add or Edit Submit
    ngOnSubmit() {
        try {
            //alert("ngGetById" + this.objScreenMode);
            if (this.objScreenMode == 1) {
                this.ngOnAdd();
            } else if (this.objScreenMode == 2) {
                this.ngOnUpdate();
            } else if (this.objScreenMode == 4) {
                this.ngOnDelete(10);
            } else {
                alert("This is VIEW only");
            }
        } catch (e) {
            console.error(e);
        }
    }

    ngOnAdd() {
        try {
            alert('You have ADDED the form!');
            this.objRegistrationData = new Registration();
            this.registrationService.create(this.objRegistrationData)
                .subscribe(data => {
                    alert(JSON.stringify(data));
                });
        } catch (e) {
            console.error(e);
        }
    }

    ngOnUpdate() {
        try {
            alert('You have UPDATED the form!');
            this.objRegistrationData = new Registration();
            this.registrationService.update(this.objRegistrationData)
                .subscribe(data => {
                    alert(JSON.stringify(data));
                });
        } catch (e) {
            console.error(e);
        }
    }

    ngOnDelete(id) {
        try {
            alert('You have DELETED the form!');
            this.objRegistrationData = new Registration();
            this.registrationService.delete(id)
                .subscribe(data => {
                    alert(JSON.stringify(data));
                });
        } catch (e) {
            console.error(e);
        }
    }

    ngOnCancel() {
        try {
            alert('You have cancelled the form!');
        } catch (e) {
            console.error(e);
        }
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}