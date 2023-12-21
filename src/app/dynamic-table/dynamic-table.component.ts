import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent {
  @Input() data: any[] = [];
  @Input() toggleRow: (id: string) => void = () => {};
  @Input() isRowSelected: (id: string) => boolean = () => false;

  expandedRows: Set<string> = new Set<string>();
}
