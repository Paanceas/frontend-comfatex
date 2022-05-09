import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModulesDashboard } from 'src/app/common/types';
import { Util } from 'src/app/common/util';
import * as modulos from '../../common/modulos.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private _router: Router) { }

  modulos:any[] = modulos.default;
  private util: Util = new Util();
  nickname: string = "";
  rol: string = "";

  @Input() active: ModulesDashboard  = 'Dashboard';

  ngOnInit(): void {
    this.getUser();
  }
  private getUser() {
    const u: any = this.util.getObj("usuario", true);
    if (!u) {
      this._router.navigate(["/page"]);
      return;
    }
    this.nickname = u.usuario;
    this.rol = u.roll;
  }
  ngAfterViewInit(): void {
    this.showNavbar("header-toggle", "nav-bar", "body-pd", "header");
  }

  showNavbar(toggleId:string, navId:string, bodyId:string, headerId:string) {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);


    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  colorLink(e:any) {
    const linkColor = document.querySelectorAll(".nav_link");
    linkColor.forEach((l:any) => l.classList.remove("active"));
    e.target?.classList.add("active");
  };

}
