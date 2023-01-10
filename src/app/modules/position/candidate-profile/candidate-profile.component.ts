import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

url:any
  currentRate = 2;
  closeResult:any

  constructor(private headerTitleService:ServicesService, private modalService: NgbModal) { }

  openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

  openBackDropCustomClass1(content1: any) {
    this.modalService.open(content1, { backdropClass: 'light-blue-backdrop' });
  }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  

  ngOnInit(): void {

    this.headerTitleService.setTitle('Ankit')
  }

}
