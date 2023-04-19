import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  private readonly inspectionAPIUrl = "https://localhost:7128/api";

  constructor(private http: HttpClient) { }

  // Inspections

  getInspectionsList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(inspection: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspections', inspection);
  }

  updateInspection(id: number | string, inspection: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`, inspection);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
  }

  // Inspection types

  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionType(inspection: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', inspection);
  }

  updateInspectionType(id: number | string, inspection: any) {
    return this.http.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`, inspection);
  }

  deleteInspectionType(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
  }

  // Statuses

  getStatusList(): Observable<any[]> {
    return this.http.get<any[]>(this.inspectionAPIUrl + '/status');
  }

  addStatus(inspection: any) {
    return this.http.post(this.inspectionAPIUrl + '/status', inspection);
  }

  updateStatus(id: number | string, inspection: any) {
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, inspection);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
  }
}
