import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../services/data-source.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(
    private readonly dataSourceService: DataSourceService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

      const routeTitleMap:{[key:string]:string}={
        'list-user': 'Usuarios',
        'list-opportunity': 'Oportunidades',
        'list-bootcamp': 'Bootcamps',
        'list-institution': 'Instituciones'
      }

      this.activatedRoute.url.subscribe(()=>{
        const currentPath = this.router.url
        const foundKey = Object.keys(routeTitleMap).find(key => currentPath.includes(key))
        if(foundKey){
          this.dataSourceService.changeTitle(routeTitleMap[foundKey])
        }
      })
  }

}
