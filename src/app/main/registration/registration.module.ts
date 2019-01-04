import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'app/main/_uimaterials/material.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegistrationComponent } from 'app/main/registration/registration.component';

import { RegistrationService } from '../_services/index';

const routes: Routes = [
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        FuseSharedModule,
    ],
    providers: [
        RegistrationService
    ]
})
export class UIFormsModule {
}
