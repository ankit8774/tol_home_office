import { Component, OnInit } from '@angular/core';
import { addUserModel } from 'src/app/models/AdminModel';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public addUserParams: addUserModel
  public loading: boolean = false
  public requestGetParams = { userDetailsId: null }
  // public addLocationParams: addLocationModel
  public LocationData: any = []
  public locationList: any = []
  users: any;
  helper: any;
  location: any;
  activeRoute: any;
  
  constructor() {this.addUserParams=new addUserModel }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  createUser(){}
  
  ngOnInit(): void {
  }

}
