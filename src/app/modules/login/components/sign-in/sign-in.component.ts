import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private _router:Router,) { }
  private util: Util = new Util();

  ngOnInit(): void {
  }

  loadSession() {
    this.util.setObj("usuario", JSON.stringify({
      roll: 'Administrador',
      usuario: 'UCompensar'
    }));
    this._router.navigate(['/comfatex']);
  }

}
