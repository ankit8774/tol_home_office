import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

// import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-screening-invitee',
  templateUrl: './screening-invitee.component.html',
  styleUrls: ['./screening-invitee.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,

  // standalone: true,
	// imports: [NgbRatingModule],

})

export class ScreeningInviteeComponent implements OnInit {

  // @Input('rating') public rating: number = 3;
  // @Input('starCount') public starCount: number = 5;
  // @Input('color') public color: string = 'accent';
  // @Output() public ratingUpdated = new EventEmitter();

  // public snackBarDuration: number = 2000;
  // public ratingArr = [];

  currentRate = 2;

  closeResult:any

  locationList=[1,2]
  searchText:any
  loading:any
  
  constructor(private modalService: NgbModal , private snackBar:MatSnackBar) { }


  openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

  
  ngOnInit(): void {

  //   console.log("a "+this.starCount)
  //   for (let index = 0; index < this.starCount; index++) {
  //     this.ratingArr.push(index as never);
  //   }
  // }
  // onClick(rating:number) {
  //   console.log(rating)
  //   this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
  //     duration: this.snackBarDuration
  //   });
  //   this.ratingUpdated.emit(rating);
  //   return false;
  // }

  // showIcon(index:number) {
  //   if (this.rating >= index + 1) {
  //     return 'star';
  //   } else {
  //     return 'star_border';
  //   }
  }

}



