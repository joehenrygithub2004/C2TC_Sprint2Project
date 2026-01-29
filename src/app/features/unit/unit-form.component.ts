import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Unit } from '../../models/unit.model';

@Component({
  selector: 'app-unit-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit, OnChanges {

  @Input() editData?: Unit;
  @Output() save = new EventEmitter<Unit>();

  form!: FormGroup;   // ✅ declare only

  types = ['SHOP','FOODCOURT','CINEMA'];
  statuses = ['ACTIVE','INACTIVE'];

  constructor(private fb: FormBuilder) {}

  // ✅ initialize here (safe)
  ngOnInit(): void {
    this.form = this.fb.group({
      unitName: ['', Validators.required],
      unitType: ['', Validators.required],
      floorNumber: [0, Validators.required],
      status: ['', Validators.required],
      rentAmount: [0, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editData'] && this.editData && this.form) {
      this.form.patchValue(this.editData);
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit({ ...this.editData, ...this.form.value });
      this.form.reset();
    }
  }
}
