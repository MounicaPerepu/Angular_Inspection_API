import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.css']
})
export class QrcodeGeneratorComponent implements OnInit {

  myAngularQRCode: string = "";

  constructor() {}

  ngOnInit(): void {
    this.myAngularQRCode = "QR CODE";
  }
}
