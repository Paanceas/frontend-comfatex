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

  data = [
    { img: "assets/imgs/carrusel/1.png", title: "Slide 1" },
    { img: "assets/imgs/carrusel/2.png", title: "Slide 2" },
    { img: "assets/imgs/carrusel/3.png", title: "Slide 3" }
  ];

  ngOnInit(): void {
  }

}
