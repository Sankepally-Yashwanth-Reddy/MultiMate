import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AgGridAngular } from '@ag-grid-community/angular';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import '@ag-grid-community/styles/ag-theme-balham.css';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [HeaderComponent, AgGridAngular, CommonModule],
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  constructor(private titleService: Title) {

  }

  ngOnInit(): void {
    this.titleService.setTitle('MultiMate | AG Grid Examples');
  }
  themeClass = 'ag-theme-quartz';


  rowData: IRow[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
    { make: 'Chevrolet', model: 'Bolt EV', price: 31995, electric: true },
    { make: 'BMW', model: 'i3', price: 44900, electric: true },
    { make: 'Audi', model: 'e-tron', price: 65900, electric: true },
    { make: 'Volkswagen', model: 'ID.4', price: 39900, electric: true },
    { make: 'Hyundai', model: 'Kona Electric', price: 34500, electric: true },
    { make: 'Subaru', model: 'Crosstrek Hybrid', price: 35500, electric: true },
    { make: 'Porsche', model: 'Taycan', price: 82100, electric: true },
    { make: 'Jaguar', model: 'I-PACE', price: 69900, electric: true },
    { make: 'Mazda', model: 'CX-5', price: 25900, electric: false },
  ];


  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' }
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
