import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit.model';
import { environment } from '../environments/environments';

@Injectable({ providedIn: 'root' })
export class UnitService {

  private baseUrl = `${environment.apiBaseUrl}/units`;

  constructor(private http: HttpClient) {}

  getAllUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(this.baseUrl);
  }

  getUnitById(id: number): Observable<Unit> {
    return this.http.get<Unit>(`${this.baseUrl}/${id}`);
  }

  createUnit(unit: Unit): Observable<Unit> {
    return this.http.post<Unit>(this.baseUrl, unit);
  }

  updateUnit(id: number, unit: Unit): Observable<Unit> {
    return this.http.put<Unit>(`${this.baseUrl}/${id}`, unit);
  }

  deleteUnit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
