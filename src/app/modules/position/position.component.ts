import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  searchText:any
filter:any

  public locationList: any = [1,2,3]
  public loading: boolean = false;
  
  constructor( private headerTitleService:ServicesService) { }

  pageChangeEvent(event: number){
    // this.p = event;
    // this.getLocationData();
}

  ngOnInit(): void {
    this.headerTitleService.setTitle('Position')
  }

}
