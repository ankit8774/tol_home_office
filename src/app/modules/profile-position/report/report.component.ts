import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  
})
export class ReportComponent implements OnInit {

  currentRate = 2;

  closeResult:any

  public userList: any = [1,2,3]
  loading:any
  
  searchText: any
  constructor(private headerTitleService:ServicesService ,
    private modalService: NgbModal
) { }


openBackDropCustomClass(content: any) {
  this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
}
openBackDropCustomClass1(content1: any) {
  this.modalService.open(content1, { backdropClass: 'light-blue-backdrop' });
}
  pageChangeEvent(event: number) {
    // this.p = event;
    // this.getUserDetails();
  }

  // openLg(content: any) {
	// 	this.modalService.open(content, { size: 'lg' });
	// }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Full Stack Developer')
}
}