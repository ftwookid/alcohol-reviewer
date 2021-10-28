import { Component, OnInit } from '@angular/core';
import { ProductItemModel, products } from './main-page.data';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public products = products;

  constructor(public dialog: MatDialog) {}

  openDialog(product: ProductItemModel) {
    this.dialog.open(CardModalComponent, {
      height: '800px',
      width: '850px',
      data: { product: product },
      panelClass: 'card-modal_background',
      backdropClass: 'card-modal_backdrop',
    });
  }

  ngOnInit(): void {}
}
