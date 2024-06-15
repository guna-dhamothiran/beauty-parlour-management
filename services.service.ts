import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost:3000/api/appointments'; // Correct endpoint

  constructor(private http: HttpClient) { }

  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post(this.apiUrl, appointmentData); // Post data directly to the endpoint
  }
}
