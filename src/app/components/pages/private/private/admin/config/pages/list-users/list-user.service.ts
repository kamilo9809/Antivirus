import { Injectable } from '@angular/core';
import { DataSourceService } from '../../../services/data-source.service';
import { Column } from 'src/interfaces/table.interface';
import { UserModel } from 'src/interfaces/user.interface';
import { RolesModel } from 'src/interfaces/roles.interface';

@Injectable({
  providedIn: 'root',
})
export class ListUserService {
  constructor(
    private readonly dataSourceService: DataSourceService,
  ) {}

  async data(users: UserModel[], roles:RolesModel[]) {
    let userConvertedColumn:Column[][]=[]
    let columnId:Column[] = []
    let columnName:Column[] = []
    let columnLastName:Column[] = []
    let columnEmail:Column[] = []
    let columnPassword:Column[] = []
    let columnRole:Column[] = []

    console.log(roles);
    

    users.forEach((element)=>{
      const idColumn = this.dataSourceService.createColumn(
        element.id,
        element.id,
        false,
        false,
        ()=>{
          alert("hola desde id")
        }
      )
      const nameColumn = this.dataSourceService.createColumn(
        element.name,
        element.name,
        false,
        true,
        ()=>{
          alert("hola desde name")
        }
      )
      const lastNameColumn = this.dataSourceService.createColumn(
        element.lastName,
        element.lastName,
        false,
        true,
        ()=>{
          alert('hola desde lastName')
        }
      )
      const emailColumn = this.dataSourceService.createColumn(
        element.email,
        element.email,
        false,
        true,
        ()=>{
          alert('hola desde lastName')
        }
      )
      const passwordColumn = this.dataSourceService.createColumn(
        element.password.slice(0,7),
        element.password.slice(0,7),
        false,
        true,
        ()=>{
          alert('hola desde lastName')
        }
      )
      const roleColumn = this.dataSourceService.createColumn(
        element.roles,
        roles,
        true,
        true,
        ()=>{
          alert('hola desde lastName')
        }
      )
      columnId.push(idColumn)
      columnName.push(nameColumn)
      columnLastName.push(lastNameColumn)
      columnEmail.push(emailColumn)
      columnPassword.push(passwordColumn)
      columnRole.push(roleColumn)
    });
      
      userConvertedColumn.push(
        columnId,
        columnName,
        columnLastName,
        columnEmail,
        columnPassword,
        columnRole
      )
    return userConvertedColumn
  }
}

