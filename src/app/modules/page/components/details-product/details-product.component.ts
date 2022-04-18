import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router} from "@angular/router";
import * as productos from '../../../../common/productos.json';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  constructor(private _activeRouter: ActivatedRoute, private router: Router) {}

  private products:any[] = productos.default;

  producto:any;
  relacionados:any[] = [];

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: any) => {
      if(params && params.item){
        this.relacionados = [];
        this.producto = this.products.find( item => item.id == params.item);
        if(this.producto){
          this.productsRelated();
        }else{
          this.router.navigate(['/page/tienda']);
        }
      }else{
        this.router.navigate(['/page/tienda']);
      }
    });
  }

  private productsRelated(){
    while (this.relacionados.length < 3) {
      const selected = this.products[Math.floor(Math.random() * this.products.length)];
      if(selected.id != this.producto.id){
        this.relacionados.push(selected);
        const filteredArray = this.relacionados.filter( (ele,pos)=> this.relacionados.indexOf(ele) == pos);
        this.relacionados = filteredArray;
      }
    }
  }
}
