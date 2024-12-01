import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from 'src/interfaces/user.interface';
import { ListUserService } from './list-user.service';
import { RoleService } from '../../../services/role.service';
import { forkJoin, Observable } from 'rxjs';
import { RolesModel } from 'src/interfaces/roles.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  public sendData!: Array<object>;
  private userData!:UserModel[];
  private roleData!:RolesModel[];

  constructor(
    private readonly userService: UserService,
    private readonly ListUserService: ListUserService,
    private readonly roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    forkJoin({
      user: this.userService.get(),
      role: this.roleService.get()
    }).subscribe({
      next: ({user, role}) => {
        this.userData = user
        this.roleData = role

        const filteredData = user.map((user: UserModel) => {
          const { password, ...rest } = user;
          return {
            id: rest.id,
            Nombre: rest.name,
            Apellido: rest.lastName,
            Correo: rest.email,
            'Fecha de Nacimiento': rest.dateBirth,
            rol: rest.roles[0].name,
          };
        });
        console.log(filteredData);
        this.sendData = filteredData;


        console.log(user);
        console.log(role);
        
        
      },
      error: (e) => {
        console.log('Error getting user data:', e);
      },
    })
  }

 postData() {
    
 }
}
