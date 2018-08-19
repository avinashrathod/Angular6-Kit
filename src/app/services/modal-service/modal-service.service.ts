import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../component/modal/modal.component';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) {

  }

  /**
   * This method will show alert pop-up
   */
  showAlert(headerText: string, templateContent: string, rightBtnText: string, rightBtnCall: any) {
    let NgbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false, // on keyboard "esc" modal will not close
      centered: true // this will center modal
    };
    const modalRef = this.ngbModal.open(ModalComponent, NgbModalOptions);
    modalRef.componentInstance.headerText = headerText;
    modalRef.componentInstance.templateContent = templateContent;
    modalRef.componentInstance.rightBtnText = rightBtnText;
    modalRef.componentInstance.rightBtnCall = rightBtnCall;
    /** Below code is to hide extra button from view */
    modalRef.componentInstance.leftBtnText = "";
    modalRef.componentInstance.leftBtnCall = {};
  }

  /**
   * This method will show confirm pop-up
   */
  showConfirm(headerText: string, templateContent: string, leftBtnText: string, rightBtnText: string, leftBtnCall: any, rightBtnCall: any) {
    let NgbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false, // on keyboard "esc" modal will not close
      centered: true // this will center modal
    };
    const modalRef = this.ngbModal.open(ModalComponent, NgbModalOptions);
    modalRef.componentInstance.headerText = headerText;
    modalRef.componentInstance.templateContent = templateContent;
    modalRef.componentInstance.rightBtnCall = rightBtnCall;
    modalRef.componentInstance.rightBtnText = rightBtnText;
    modalRef.componentInstance.leftBtnText = leftBtnText;
    modalRef.componentInstance.leftBtnCall = leftBtnCall;
  }
}
