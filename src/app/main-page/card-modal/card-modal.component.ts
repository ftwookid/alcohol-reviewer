import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductItemModel } from '../main-page.data';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: ProductItemModel }
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
