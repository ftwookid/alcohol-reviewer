import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../main-page.data';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() product: ProductItemModel;

  constructor() {}

  ngOnInit(): void {
    console.log(this.product);
  }
}
