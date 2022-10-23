import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './components/flights/flights.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopPipe } from './pipes/cop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    NavbarComponent,
    HeaderComponent,
    TripDetailComponent,
    FooterComponent,
    CopPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
