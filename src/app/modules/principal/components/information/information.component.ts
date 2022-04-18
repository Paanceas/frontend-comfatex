import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sizeView(event:any){
    const template = document.querySelector(".sidebar");
    const body = document.querySelector(".body");
    if(event){
      template?.classList.add("expander");
      body?.classList.add("body-expander");
    }else{
      template?.classList.remove("expander");
      body?.classList.remove("body-expander");
    }
  }

}
