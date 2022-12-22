import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  searchText:any
  userList:any
loading:any

  constructor(private headerTitleService:ServicesService) { }

  pageChangeEvent(event: number){
    // this.p = event;
    // this.getBusinessData();
}

  ngOnInit(): void {
    this.headerTitleService.setTitle('Client List')
  }

}
