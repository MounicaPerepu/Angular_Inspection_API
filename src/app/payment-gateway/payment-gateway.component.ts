import { Component, OnInit } from '@angular/core';
import { PaymentGatewayService } from '../services/payment-gateway.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {

  // TODO: Generate API Key - we can use Razorpay/client api key
  // TODO: Generate Order ID - unique uuid

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "http://localhost:4200",
    "prefill": {
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
  };

  rzp1: any;

  constructor(private paymentGatewayService: PaymentGatewayService) {}

  ngOnInit(): void {
  }

  payClick(): void {
    // Generating uuid
    const uniqueId = uuid();
    // this.options.order_id = uniqueId;
    this.rzp1 = new this.paymentGatewayService.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  }
}
