import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicTableComponent} from '../dynamic-table/dynamic-table.component';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DynamicTableComponent
  ]
})
export class ExpandableTableComponent implements OnInit {
  tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tableData = [
        {
          "id": "1",
          "text1": "text 1.1",
          "text2": "text 1.2",
          "children": []
        },
        {
          "id": "2",
          "text1": "text 2.1",
          "text2": "text 2.2",
          "children": [
            {
              "id": "2.1",
              "text1": "text 2.1.1",
              "text2": "text 2.1.2",
              "children": [
                {
                  "id": "2.1.1",
                  "text1": "text 2.1.1.1",
                  "text2": "text 2.1.1.2",
                  "children": [{
                  "id": "2.1.1",
                  "text1": "text 2.1.1.1.1",
                  "text2": "text 2.1.1.1.2",
                  "children": []
                }]
                }
              ]
            }
          ]
        },
        {
          "id": "4",
          "text1": "text 4.1",
          "text2": "text 4.2",
          "children": [{"id": "4.1",
              "text1": "text 4.1.1",
              "text2": "text 4.1.2"}]
        }
      ];
    }

expandedRows: Set<string> = new Set<string>();

toggleRow(id: string ): void {
  if (this.isRowSelected(id)) {
    this.expandedRows.delete(id);
  } else {
    this.expandedRows.add(id);
  }
}

isRowSelected(id: string ): boolean {
  return this.expandedRows.has(id);
}

}
