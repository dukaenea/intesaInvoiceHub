import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  invoices = [
    {
     id: '1',
     name: 'John',
     amount: 123.45,
     invMonth: '04',
     invYear: '2019'
    },
    {
      id: '2',
      name: 'Lisa',
      amount: 152.45,
      invMonth: '12',
      invYear: '2019'
    },
    {
      id: '3',
      name: 'Lisa',
      amount: 152.45,
      invMonth: '12',
      invYear: '2019'
    },
    {
      id: '4',
      name: 'Lisa',
      amount: 152.45,
      invMonth: '12',
      invYear: '2019'
    },
    {
      id: '5',
      name: 'Lisa',
      amount: 152.45,
      invMonth: '12',
      invYear: '2019'
    },
    {
      id: '6',
      name: 'John',
      amount: 123.45,
      invMonth: '04',
      invYear: '2019'
    },
    {
      id: '7',
      name: 'John',
      amount: 123.45,
      invMonth: '04',
      invYear: '2019'
    },
    {
      id: '8',
      name: 'John',
      amount: 123.45,
      invMonth: '04',
      invYear: '2019'
    },
  ];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'amount', 'invMonth', 'invYear', 'details'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  // tslint:disable-next-line:variable-name
  constructor() { }

  ngOnInit() {
    console.log(this.invoices);
    this.listData = new MatTableDataSource(this.invoices);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    this.listData.filter = this.searchKey;
    console.log(this.listData);
  }

  // event handler for click on the clear button of the filter input
  clearFilter() {
    this.searchKey = '';
    this.filterData();
  }

  // event handler for keyup event of the filter input
  filterData() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
