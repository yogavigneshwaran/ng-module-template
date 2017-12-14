import { ModuleWithProviders, NgModule, Provider, InjectionToken, Type } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, provideRoutes, ROUTES, Router } from "@angular/router";
import { ModalOutletComponent } from "./modal-outlet/modal-outlet.component";
import { ModalService } from "./services/modal.service";
import { Modal } from "./models/modal.model";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { CommonModule } from "@angular/common";
//import { ANALYZE_FOR_ENTRY_COMPONENTS } from "@angular/core";


// export const Modals = new InjectionToken<Modal[]>('modals');
// export function InitModalService(router:Router, modals:Modal[]) {
//     var routes:Routes =  modals.map(t=> { return { path: t.name, component: t.component, outlet:'modal'}});
//     router.resetConfig(routes);
//     return new ModalService(router);
// }

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([])
    ],
    declarations: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    exports: [
        ModalDialogComponent,
        ModalOutletComponent
    ],
    providers: [
        ModalService
    ]
})
export class ModalModule {


    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule, 
            providers: [ModalService]
            // providers: [
            
            //     { provide: Modals, useValue: modals},
            //     { provide: ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: modals },
            //     { provide: ModalService, useFactory: InitModalService, deps:[Router, Modals] }
            // ]
        }
    }
 
}