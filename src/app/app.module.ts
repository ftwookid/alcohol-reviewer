import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleCardComponent } from './main-page/single-card/single-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModalComponent } from './main-page/card-modal/card-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SingleCardComponent,
    CardModalComponent,
  ],
  entryComponents: [CardModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
