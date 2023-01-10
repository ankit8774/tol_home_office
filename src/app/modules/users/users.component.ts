import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userList: any = [1,2,3]
  loading:any
  
  searchText: any
  constructor(private headerTitleService:ServicesService ) { }

  pageChangeEvent() {
    // this.p = event;
    // this.getUserDetails();
  }


  ngOnInit(): void {
    this.headerTitleService.setTitle('User List')
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure want to Suspend this user?',
     
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Suspended!', 'User Suspend Successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'User still in our database', 'error');
      }
    });
  }

}
