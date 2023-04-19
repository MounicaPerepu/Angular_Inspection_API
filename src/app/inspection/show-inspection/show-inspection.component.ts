import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  // Map to display data associate with foreign keys
  inspectionTypesMap: Map<number, string> = new Map();

  modalTitle: string = "";
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;

  constructor(private inspectionApiService: InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionApiService.getInspectionsList();
    this.inspectionTypesList$ = this.inspectionApiService.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap(): void {
    this.inspectionApiService.getInspectionTypesList().subscribe(data => {
      this.inspectionTypesList = data;

      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    });
  }

  modalAdd(): void {
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null
    };
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  modalClose(): void {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.inspectionApiService.getInspectionsList();
  }

  modalEdit(item: any): void {
    this.inspection = item;
    this.modalTitle = "Edit Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  delete(item: any): void {
    if (confirm(`Are you sure you want to delete Inspection ${item.id}`)) {
      this.inspectionApiService.deleteInspection(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 4000);
        this.inspectionList$ = this.inspectionApiService.getInspectionsList();
      });
    }
  }
}
