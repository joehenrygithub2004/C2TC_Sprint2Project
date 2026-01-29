import { Component } from '@angular/core';
import { UnitFormComponent } from './unit-form.component';
import { UnitListComponent } from './unit-list.component';
import { UnitService } from '../../services/unit.service';
import { Unit } from '../../models/unit.model';

@Component({
  selector: 'app-unit-page',
  standalone: true,
  imports: [UnitFormComponent, UnitListComponent],
  template: `
  <div class="bg">
    <app-unit-form
      [editData]="selected"
      (save)="save($event)">
    </app-unit-form>

    <app-unit-list
      [units]="units"
      (edit)="selected=$event"
      (delete)="remove($event)">
    </app-unit-list>
  </div>
  `,
  styleUrls: ['./unit-page.component.css']
})
export class UnitPageComponent {

  units: Unit[] = [];
  selected?: Unit;

  constructor(private service: UnitService) {
    this.load();
  }

  load() {
    this.service.getAllUnits().subscribe(res => this.units = res);
  }

  save(unit: Unit) {
    const req = unit.unitId
      ? this.service.updateUnit(unit.unitId, unit)
      : this.service.createUnit(unit);

    req.subscribe(() => {
      this.selected = undefined;
      this.load();
    });
  }

  remove(id: number) {
    if(confirm('Delete this unit?')) {
      this.service.deleteUnit(id).subscribe(() => this.load());
    }
  }
}
