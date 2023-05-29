import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent
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
