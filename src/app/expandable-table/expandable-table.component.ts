import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicTableComponent} from '../dynamic-table/dynamic-table.component';
import tableData from '../../assets/data.json';

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
    this.tableData = tableData.rows;
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
