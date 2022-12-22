import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Dcount:any;
  loading!:boolean

  constructor(private headerTitleService:ServicesService ) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Dashboard')
  }

}
