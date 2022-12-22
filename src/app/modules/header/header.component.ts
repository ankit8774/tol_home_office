import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = ''
  constructor(private headerTitleService: ServicesService) { }

  ngOnInit(): void {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }
  }

 