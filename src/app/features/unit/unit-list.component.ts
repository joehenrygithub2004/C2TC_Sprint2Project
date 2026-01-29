import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Unit } from '../../models/unit.model';

@Component({
  selector: 'app-unit-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent {

  @Input() units: Unit[] = [];
  @Output() edit = new EventEmitter<Unit>();
  @Output() delete = new EventEmitter<number>();
}
