import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/app/common/util';
import { Sidebar } from 'src/app/models/Sidebar';
import { UserResponse } from 'src/app/models/User';
import * as modulos from '../../common/modulos.json';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() size = new EventEmitter();

  private util:Util = new Util();
  constructor(
    private _router:Router,
  ) { }

  listSidebar:Sidebar[] = [];

  ngOnInit(): void {
  }

}
