import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal-service/modal-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  /**
   * This method will open alert prompt
   */
  openAlert() {
    this.modalService.showAlert('Alert Header', 'Alert templateContent', 'Okay', () => {
      console.log("Okay button called");
    });
  }

  /**
   * This method will open confirm prompt
   */
  openConfirm() {
    this.modalService.showConfirm('Confirm Header', 'Confirm templateContent', 'Cancel', 'Okay', () => {
      console.log("Cancel funcation called");
    }, () => {
      console.log("Okay function called");
    });
  }
}
