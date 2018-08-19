import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() headerText;
  @Input() templateContent;
  @Input() leftBtnText;
  @Input() leftBtnCall;
  @Input() rightBtnText;
  @Input() rightBtnCall;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
  }

  leftBtnClick(){
    this.leftBtnCall();
    this.activeModal.close('Left Button Click')
  }

  rightBtnClick(){
    this.rightBtnCall();
    this.activeModal.close('Right Button Click')
  }

}
