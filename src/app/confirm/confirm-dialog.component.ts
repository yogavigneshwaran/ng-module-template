import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../modal/services/modal.service';
import { Confirm } from './confirm.model';


@Component({
    selector: 'nx-confirm-dialog',
    templateUrl: 'confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {
    info:Confirm;
    constructor(private modalService:ModalService,private injector:Injector) {
       
        this.info = this.modalService.getValue(this.injector);
     }

    ngOnInit() {
     }

     submit() {
         this.modalService.ok(this.info);
     }
     cancel() {
         this.modalService.cancel();
     }

     
}