import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewItemModalComponent } from '../main-page/add-new-item-modal/add-new-item-modal.component';

@Component({
  selector: 'app-input-sort',
  templateUrl: './input-sort.component.html',
  styleUrls: ['./input-sort.component.scss'],
})
export class InputSortComponent implements OnInit {
  value: string = '';

  constructor(public dialog: MatDialog) {}

  openAddDialog() {
    this.dialog.open(AddNewItemModalComponent, {
      height: '800px',
      maxHeight: '90vh',
      width: '850px',
      data: {},
      panelClass: 'addNewItem-modal_background',
      backdropClass: 'addNewItem-modal_backdrop',
    });
  }

  ngOnInit(): void {}
}
