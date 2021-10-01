import { Component, OnInit } from '@angular/core';
import { products } from './main-page.data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public products = products;

  constructor() {}

  ngOnInit(): void {}
}
