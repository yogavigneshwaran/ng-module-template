import { Component, Inject } from '@angular/core';
import { baseAnimation } from '../modal.anim';

@Component({
  selector: 'modal-outlet',
  templateUrl: './modal-outlet.component.html',
  animations:[
    baseAnimation
  ]
})
export class ModalOutletComponent {
  constructor() {
    
  }
}