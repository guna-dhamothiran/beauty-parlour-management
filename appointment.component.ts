import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  submitted = false;

  constructor(private servicesService: ServicesService) { }

  onSubmit(appointmentForm: NgForm) {
    this.submitted = true;
    if (appointmentForm.valid) {
      this.servicesService.createAppointment(appointmentForm.value).subscribe(
        (response) => {
          console.log('Appointment created', response);
          this.submitted = true;
          setTimeout(() => {
            appointmentForm.resetForm();
            this.submitted = false;
          }, 2000);
        },
        (error) => {
          console.error('Error creating appointment', error);
        }
      );
    }
  }

  buttonWidth = 240;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "8300.00",
      currencyCode: "INR",
      countryCode: "IN"
    }
  }

  onLoadPaymentData(event: any) {
    console.log(event, ">> Data");
  }
}
