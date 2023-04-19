import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiService } from './services/inspection-api.service';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { QrcodeGeneratorComponent } from './qrcode-generator/qrcode-generator.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    PaymentGatewayComponent,
    QrcodeGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent, InspectionComponent, ShowInspectionComponent, AddEditInspectionComponent]
})
export class AppModule { }
