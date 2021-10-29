import { Component, Output, EventEmitter  } from '@angular/core';
import { CheckoutForm } from 'src/app/models/checkout-form';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  @Output() checkout: EventEmitter<CheckoutForm> = new EventEmitter()
  form: CheckoutForm = {};
  constructor() { }

  proceed() {
    this.checkout.emit(this.form)
  }
}
