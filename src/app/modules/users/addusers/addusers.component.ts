import { Component, OnInit } from '@angular/core';
import { addUserModel } from 'src/app/models/AdminModel';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {

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

  constructor(    ){this.addUserParams=new addUserModel}
    

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  createUser(){
    // this.users.createUser(this.addUserParams).subscribe((response:any)=>{
    //   if(response.status)
    //   console.log(response);
    //   this.router.navigate(['/user'])
      
    // })
  }

  getUserDetails(){
    this.loading = true;
    this.users.getUserDetails(this.requestGetParams).subscribe((response:any)=>{
      if(response.status){
        console.log(response.data[0]);
        const user =response.data[0].details[0]
        console.log(user);

        this.addUserParams.firstName =user.firstName
        this.addUserParams.lastName =user.lastName
        this.addUserParams.email =user.email
        this.addUserParams.mobile =user.mobile
        this.addUserParams.typeId= user.typeId
        this.addUserParams.locationId=user.locationId
        
        
      }else{
        this.helper.showSwal('error', 'Error', response.msg);
      }
      this.loading=false
    },(error: any) =>{
      this.loading=false
      alert(error)
    
    })
  }

  getLocationData() { 
    this.loading = true;
    this.location.getLocationList(this.requestGetParams).subscribe((response:any) => {
      if(response.status){
        console.log(response.data[0]);
      this.locationList = response.data[0].details;
      const location = response.data[0].details[0];
      
      // console.log(this.locationList);
      // this.requestLocation.locationName = location.locationName;
      // this.requestLocation.locationId = location.locationId;
    } else {
      this.helper.showSwal('error', 'Error', response.msg);
  } 
  this.loading=false
    }, (error: any) => {
      this.loading = false;
      alert(error);
    });

  }

  ngOnInit(): void {

    // this.activeRoute.params.subscribe((params: { [x: string]: any; })=>{
    //   this.addUserParams.userDetailsId = params['userDetailsId']
    //   this.requestGetParams.userDetailsId = params['userDetailsId']
    //   if(params['userDetailsId']){
    //     this.getUserDetails()
    //     this.getLocationData()
    //   }
    //   else{
    //     // this.getUserDetails()
    //     this.getLocationData()
    //   }
    // })
  }
}