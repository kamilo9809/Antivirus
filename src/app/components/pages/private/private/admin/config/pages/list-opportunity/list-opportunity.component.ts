import { Component, OnInit } from '@angular/core';
import { OpportunityService } from '../../../services/opportunity.service';
import { OpportunityModel } from 'src/interfaces/opportunity.interface';

@Component({
  selector: 'app-list-opportunity',
  templateUrl: './list-opportunity.component.html',
  styleUrls: ['./list-opportunity.component.css']
})
export class ListOpportunityComponent implements OnInit {

  public sendData!:Array<object>
  
  constructor(
    private readonly opportunityService:OpportunityService
  ){}

  ngOnInit(): void {
      this.opportunityService.get().subscribe({
        next:(res)=>{
          const filteredData = res.map((opportunity: OpportunityModel)=>{
            return {
              id: opportunity.id,
              Categoria: opportunity.idCategories.categories,
              Status: opportunity.idStatus.status,
              "Tipo Oportunidad": opportunity.typeOpportunities.oportunityType,
              Observacion: opportunity.observations,
              Nombre: opportunity.name,
              Descripcion: opportunity.descriptions,
              "Donde aplica": opportunity.applications,
              Requerimientos: opportunity.requeriments,
              Guia: opportunity.guide,
              "Datos adicionales": opportunity.adicionalDates,
              "Canales de Contacto": opportunity.contactChannels
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
