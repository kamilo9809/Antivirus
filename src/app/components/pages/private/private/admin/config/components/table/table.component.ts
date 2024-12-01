import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Column } from 'src/interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() getData!: Array<object>
  @Input() postData!:()=>void

  public headers!: Array<string>
  public rows!: Array<{ [key: string]: Column }>

  constructor(){ }

  ngOnChanges(changes: SimpleChanges): void {

    console.log(this.getData);
    
    if (changes['getData'].currentValue && this.getData.length > 0) {

      const headers = Object.keys(this.getData[0])
      this.headers = headers

      this.rows = this.getData.map(item => {
        const typedItem = item as { [key: string]: any }
        const rowData: { [key: string]: any } = {}
        this.headers.forEach(header => {
          rowData[header] = typedItem[header]
        })
        return rowData
      })
    }
  }
}
