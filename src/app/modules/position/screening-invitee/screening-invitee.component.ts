import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/shared/services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-screening-invitee',
  templateUrl: './screening-invitee.component.html',
  styleUrls: ['./screening-invitee.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,


})

export class ScreeningInviteeComponent implements OnInit {


  currentRate = 2;

  closeResult: any

  locationList = [1, 2]
  searchText: any
  loading: any

  constructor(private modalService: NgbModal, private headerTitleService: ServicesService, private snackBar: MatSnackBar) { }


  alertConfirmation() {
    Swal.fire({
      title: 'Re-Invite will erase previous data?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Re-Invite!', 'Candidate ReInvite Successfull.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', '', 'error');
      }
    });
  }



  openBackDropCustomClass(content: any) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  delete(u: any) {
    const i = this.locationList.indexOf(u)
    this.locationList.splice(i, 1)
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Full Stack Developer')


  }

}



