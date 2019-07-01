import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-item',
  templateUrl: './drawer-item.component.html',
  styleUrls: ['./drawer-item.component.css']
})
export class DrawerItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appDrawerItemClicked() {
    window.location.href = "invoiceProvider/2";
  }
}
