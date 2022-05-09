import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/common/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private util: Util = new Util();
  nickname: string = "";
  rol: string = "";
  search: string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.getUser();
    console.log('entre')
  }
  private getUser() {
    const u: any = this.util.getObj("usuario", true);
    console.log("🚀 ~ file: header.component.ts ~ line 25 ~ HeaderComponent ~ getUser ~ u", u)
    if (!u) {
      this._router.navigate(["/page"]);
      return;
    }
    this.nickname = u.usuario;
    this.rol = u.roll;
  }

  goToSearch() {
    if (this.search && this.search.length > 2) {
      // this._router.navigate(["/comfatex/consulta",this.search]);
      this.search = "";
    }
  }

}
