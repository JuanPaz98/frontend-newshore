import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { Flight } from '../../interfaces/flight.interface';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(private apiSVC: ApiConnectionService) { }

  flights:Flight[] = []

  getFlights(){
    return this.apiSVC.getAllData()
    .subscribe(data =>  this.flights = data);
  }
  ngOnInit(): void {
  }

}
