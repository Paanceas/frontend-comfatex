import { Component, OnInit } from '@angular/core';
import * as users from '../../../../common/users.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  usuarios:any[] = users.default;

  ngOnInit(): void {
  }

  confirmDel(user:any){
    Swal.fire({
     title: `¿Estas Seguro de eliminar el usuario ${user.full_name}?`,
     text: "¡No podrás revertir esto!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     cancelButtonText: 'Cancelar',
     confirmButtonText: `Sí eliminar`
   }).then((result) => {
     if (result.isConfirmed) {
       console.log(result);
     }
   })
}

}
