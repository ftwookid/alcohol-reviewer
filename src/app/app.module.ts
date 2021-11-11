import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SingleCardComponent } from './main-page/single-card/single-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModalComponent } from './main-page/card-modal/card-modal.component';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InputSortComponent } from './input-sort/input-sort.component';
import { MatIconModule } from '@angular/material/icon';
import { AddNewItemModalComponent } from './main-page/add-new-item-modal/add-new-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SingleCardComponent,
    CardModalComponent,
    InputSortComponent,
    AddNewItemModalComponent,
  ],
  entryComponents: [CardModalComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
