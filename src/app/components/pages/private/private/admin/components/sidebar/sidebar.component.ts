import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../services/data-source.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  tittleTable=''

  constructor(private readonly dataSourceService: DataSourceService){}

  ngOnInit(): void {
      this.dataSourceService.currentTitle.subscribe(title =>{
        this.tittleTable = title
        console.log(title);
      })
  }

}
