import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../../services/institution.service';
import { InstitutionsModel } from 'src/interfaces/institution.interface';

@Component({
  selector: 'app-list-institution',
  templateUrl: './list-institution.component.html',
  styleUrls: ['./list-institution.component.css']
})
export class ListInstitutionComponent implements OnInit {

  public sendData!:Array<object>
  
  constructor(
    private readonly institutionService:InstitutionService
  ){}

  ngOnInit(): void {
      this.institutionService.get().subscribe({
        next:(res)=>{
          const filteredData = res.map((institutions:InstitutionsModel)=>{
            return{
              id: institutions.id,
              Estado: institutions.idStatus.statusReview,
              Ubicacion: institutions.ubicationsInstitutions.zona,
              Nombre: institutions.name,
              Observacion: institutions.observation,
              Direccion: institutions.directions,
              "Link general": institutions.generalLink,
              "Link carrera": institutions.carerLink,
              "Link bienestar": institutions.bienestarLink,
              "Link proceso": institutions.proccesLink
            }
          })
          console.log(filteredData);
          this.sendData = filteredData            
        },
        error:(e)=>{
          console.log('te falta facha we', e);
          
        }
      })
  }
}
