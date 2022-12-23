import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-profile-position',
  templateUrl: './profile-position.component.html',
  styleUrls: ['./profile-position.component.css']
})
export class ProfilePositionComponent implements OnInit {

  constructor(private headerTitleService:ServicesService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Full Stack Developer')
  }

}
