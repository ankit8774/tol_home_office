import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/shared/services.service';


@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.css']
})
export class ScreeningComponent implements OnInit {
  searchText: any
  filter: any

  public locationList: any = [1, 2, 3]
  public loading: boolean = false;

  public position =['.Net' , '.NetCore', 'Android', 'Android+ Kotlin','Angular','Assure Care DotNet','Flutter','Python', 'Python+Django' ]
public status = ['Screening Invited','Screening Cancelled','Screening Feedback Pending','Screening Hold','Screening Rejected']

  currentRate = 2;

  closeResult:any

  constructor(private headerTitleService:ServicesService ,private modalService: NgbModal) { }

  pageChangeEvent(event: number){
  
}
onkey(){

}
 openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

  ngOnInit(): void {
    this.headerTitleService.setTitle('Screening')
  }

}
