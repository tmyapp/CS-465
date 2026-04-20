import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  perPerson: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private http = inject(HttpClient);
  private apiBaseUrl = 'http://localhost:3000/api';

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token ?? ''}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`, {
      headers: this.getHeaders()
    });
  }

  getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${code}`, {
      headers: this.getHeaders()
    });
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip, {
      headers: this.getHeaders()
    });
  }

  deleteTrip(code: string): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/trips/${code}`, {
      headers: this.getHeaders()
    });
  }

  updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.apiBaseUrl}/trips/${code}`, trip, {
      headers: this.getHeaders()
    });
  }
}