import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay" *ngIf="visible">
      <div class="dialog">
        <p>{{ message }}</p>
        <div class="actions">
          <button (click)="confirm()">Yes</button>
          <button class="cancel" (click)="cancel()">No</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.5);
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .dialog {
      background:white;
      padding:20px;
      border-radius:10px;
      min-width:250px;
    }
    .actions {
      display:flex;
      justify-content:flex-end;
      gap:10px;
    }
    .cancel {
      background:#ddd;
    }
  `]
})
export class ConfirmDialogComponent {

  @Input() visible = false;
  @Input() message = 'Are you sure?';

  @Output() yes = new EventEmitter<void>();
  @Output() no = new EventEmitter<void>();

  confirm() {
    this.yes.emit();
  }

  cancel() {
    this.no.emit();
  }
}
