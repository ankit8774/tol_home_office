import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})
export class AddPositionComponent implements OnInit {

  assessment = this._formBuilder.group({
    ScreeningTest: ['hh'],
    DirectInterviewInvites: false,
    // mushroom: false,
  });

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };




  constructor(private _formBuilder: FormBuilder ,private headerTitleService:ServicesService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Add Position')
  
  }

}
