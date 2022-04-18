import { Component, OnInit } from '@angular/core';
import * as productos from '../../../../common/productos.json';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }

  products:any[] = productos.default;

  ngOnInit(): void {
  }

}
