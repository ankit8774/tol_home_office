import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {

  assessment = this._formBuilder.group({
    ScreeningTest: ['hh'],
    DirectInterviewInvites: false,
    // mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder ,private headerTitleService:ServicesService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Edit Position')
  }

}
