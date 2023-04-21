import { Component, OnInit } from '@angular/core';
import { CodingFunctionalityService } from '../services/coding-functionality.service';
import { Coding, IcdCodes } from 'src/assets/coding';

@Component({
  selector: 'app-coding-functionality',
  templateUrl: './coding-functionality.component.html',
  styleUrls: ['./coding-functionality.component.css'],
})
export class CodingFunctionalityComponent implements OnInit {
  codingItems: Coding[] = [];
  icdCodes: IcdCodes[] = [];

  constructor(private codingService: CodingFunctionalityService) {}

  ngOnInit(): void {
    this.codingService.getCodingDetails().subscribe((items) => {
      this.codingItems = items;
      this.codingItems.forEach((item) => {
        item.icdCodes = this.mapIcdCodeString(item);
      });
    });
  }

  onRequestOrCancel(event: string): void {
    alert(`Your order has been ${event} successfully`);
  }

  onEnter(index: number): void {
    this.codingItems.forEach((item) => {
      item.icdCodes = this.addIcdCodesToList(item);
      item.icdCodeString = item.icdCodeString.toLocaleUpperCase();
    });
    this.onKeyDown(index);
  }

  onKeyDown(index: number): void {
    let nextElementSiblingId = 'icdCodeText' + (index + 1);
    if (index < this.codingItems.length) {
      const element = document.querySelector(
        `#${nextElementSiblingId}`
      ) as HTMLElement;
      element.focus();
    }
  }

  onKeyUp(index: number): void {
    let previousElementSiblingId = 'icdCodeText' + (index - 1);
    if (index < this.codingItems.length) {
      const element = document.querySelector(
        `#${previousElementSiblingId}`
      ) as HTMLElement;
      element.focus();
    }
  }

  onSubmit(): void {
    console.log(this.codingItems);
    alert('Your orders are submitted successfully');
  }

  onAddEditModal(icdCodes: any[]): void {
    this.icdCodes = icdCodes;
  }

  onRemoveIcdCode(index: number): void {
    if (this.icdCodes.length > 1) {
      this.icdCodes.splice(index, 1);
    } else {
      alert('At least one ICD code must be added before submitting');
    }
  }

  onAddIcdCode(): void {
    let newIcdCode: IcdCodes = {
      id: this.icdCodes.length + 1,
      name: '',
    };
    this.icdCodes.push(newIcdCode);
  }

  onSubmitIcdCodes(): void {
    if (this.icdCodes.length > 0) {
      let id = 0;
      this.icdCodes.forEach((code) => {
        code.id = id = id + 1;
      });
      this.codingItems.forEach((item) => {
        item.isSubmitClicked = true;
        item.icdCodes = this.mapIcdCodeString(item);
      });
    } else {
      alert('Please add at least one ICD code');
    }
  }

  onCloseModal(): void {
    this.codingItems.forEach((item) => {
      if (!item.isSubmitClicked) {
        item.icdCodes = this.addIcdCodesToList(item);
      } else {
        item.icdCodes = this.mapIcdCodeString(item);
      }
      item.isSubmitClicked = false;
    });
  }

  private addIcdCodesToList(item: Coding): IcdCodes[] {
    let icdCodes: any[] = [];
    icdCodes.push(
      String(item.icdCodeString)
        .toLocaleUpperCase()
        .split(',')
        .map((code: string, index: number) => {
          return {
            id: index + 1,
            name: code.trim(),
          };
        })
    );
    return icdCodes[0];
  }

  private mapIcdCodeString(item: Coding): IcdCodes[] {
    let icdCodesStringList: string[] = [];
    item.icdCodes.forEach((code) => {
      code.name = code.name.toLocaleUpperCase();
      icdCodesStringList.push(code.name);
      item.icdCodeString = icdCodesStringList.join(',');
    });
    return item.icdCodes;
  }
}
