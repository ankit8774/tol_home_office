import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-interviewcalender',
  templateUrl: './interviewcalender.component.html',
  styleUrls: ['./interviewcalender.component.css']
})
export class InterviewcalenderComponent implements OnInit {

  searchText: any
  filter: any

  public locationList: any = [1, 2, 3]
  public loading: boolean = false;

  public position = ['.Net', '.NetCore', 'Android', 'Android+ Kotlin', 'Angular', 'Assure Care DotNet', 'Flutter', 'Python', 'Python+Django']
  public status = ['Screening Invited', 'Screening Cancelled', 'Screening Feedback Pending', 'Screening Hold', 'Screening Rejected']
  public interviewers = ['2342', 6458524, 'Anurag', 'Abhishek', 'P D', 'Mohit',]
  currentRate = 2;

  closeResult: any

  constructor(private headerTitleService: ServicesService, private modalService: NgbModal) { }

  pageChangeEvent(event: number) {

  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Interview Calender')
  }

}
