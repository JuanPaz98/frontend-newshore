import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { Flight } from '../../interfaces/flight.interface';
import { Route } from '../../interfaces/route.interface';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(private apiSVC: ApiConnectionService) { }
  
  originCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  destinationCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  

  origin: string = ''
  destination: string = ''
  validated: boolean = false

  allFlights:Flight[] = []
  route: Route = {
    "journey" : {
      "origin": "fdas",
      "destination": "fdsa",
      "price": 0,
      "flights": [
        {
          "departureStation": '',
          "arrivalStation": '',
          "flightCarrier": '',
          "flightNumber": ' ',
          "price": 0
        }
      ]
    }
  }
  origenes: Flight[] = [] 
  destinos: Flight[] = []
  arrayRuta: Flight[] = []
  
/*   origen: any;
  destino: any;
 */
 
  ngOnInit(): void {
    this.getFlights()
  }

  getFlights(){
    return this.apiSVC.getAllData()
    .subscribe(data =>  {
      this.allFlights = data });
  }
  getDataCtrl(event: Event){
    event.preventDefault();
    console.log(this.originCtrl.value.toUpperCase())
    console.log(this.destinationCtrl.value.toUpperCase())
    this.origin = this.originCtrl.value.toUpperCase()
    this.destination = this.destinationCtrl.value.toUpperCase()
    this.calcularRuta()

  }

  calcularRuta(){ 
    this.calculo()
    console.log(this.route)
    console.log( this.arrayRuta)
    this.validated = true

    
  }
  
  extraerOrigen(){
    this.origenes = this.allFlights.filter(fl => fl.departureStation == (this.origin))
    console.log(this.origenes)
  }
  extraerDestino(){
    this.destinos = this.allFlights.filter(fl => fl.arrivalStation.includes(this.destination))
    console.log(this.destinos)
  }

  calculo(){
    this.extraerOrigen()
    this.extraerDestino()
    let totalPrice = 0
    for(let i = 0; i < this.origenes.length; i++){
      let coinciden = false;

      for(let j = 0; j < this.destinos.length && coinciden == false; j++){
        if(this.origenes[i].arrivalStation == this.destinos[j].departureStation){
          this.arrayRuta.push(this.destinos[j])
          this.route.journey.destination = this.destinos[j].arrivalStation 
          totalPrice += this.destinos[j].price
          coinciden = true
        }
      }
      if(coinciden){
        this.arrayRuta.push(this.origenes[i])
        this.route.journey.origin = this.origenes[i].departureStation
        totalPrice += this.origenes[i].price
      }
    }
    this.route.journey.price = totalPrice
    for(let k = 0; k<this.arrayRuta.length; k++) {
      this.route.journey.flights.unshift(this.arrayRuta[k])
    }

    this.route.journey.flights.pop()
  }
    
}