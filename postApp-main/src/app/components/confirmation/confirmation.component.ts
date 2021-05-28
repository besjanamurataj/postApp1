import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) {}

  ngOnInit() {}

  decline() {
    this.activeModal.close(false);
  }

  accept() {
    this.activeModal.close(true);
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
