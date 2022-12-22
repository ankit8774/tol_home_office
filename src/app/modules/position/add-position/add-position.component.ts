import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  title= 'Add Position'

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
