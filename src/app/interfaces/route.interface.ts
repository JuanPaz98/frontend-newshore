import { Flight } from '../interfaces/flight.interface'
export interface Route {
    "journey": {
        "origin": string,
        "destination": string,
        "price": number,
        "flights":Flight [ ],
    } 
}
