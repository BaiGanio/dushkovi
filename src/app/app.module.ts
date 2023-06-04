import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TavernComponent } from './tavern/tavern.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    HomeComponent,
    RoomsComponent,
    ContactsComponent,
    TavernComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
