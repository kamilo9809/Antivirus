import { Component, OnInit } from '@angular/core';
import { BootcampService } from '../../../services/bootcamp.service';
import { BootcampModel } from 'src/interfaces/bootcamp.interface';

@Component({
  selector: 'app-list-bootcamp',
  templateUrl: './list-bootcamp.component.html',
  styleUrls: ['./list-bootcamp.component.css']
})
export class ListBootcampComponent implements OnInit {

  public sendData!:Array<object>
  
  constructor(
    private readonly bootcampService:BootcampService
  ){}

  ngOnInit(): void {
      this.bootcampService.get().subscribe({
        next:(res)=>{
          const filteredData = res.map((bootcamps:BootcampModel)=>{
            return {
              id: bootcamps.id,
              "Descripcion General": bootcamps.idGeneral.description,
              Temas: bootcamps.idTemas.topics,
              Nombre: bootcamps.nombre,
              Informacion: bootcamps.informacion,
              Costos: bootcamps.idCostos.costs,
              Estado: bootcamps.idEstado.id
          }
          })
          this.sendData = filteredData          
        },
        error:(e)=>{
          console.log('te falta facha we', e);
          
        }
      })
  }

}
