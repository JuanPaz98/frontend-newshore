import { Injectable } from '@angular/core';
import { Flight } from '../interfaces/flight.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  API_url = 'https://recruiting-api.newshore.es/api/flights/1'

  constructor(private http: HttpClient) { }
  
  getAllData(){
    return this.http.get<Flight[]>(this.API_url)
  }
}
