import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-editface-ai',
  templateUrl: './editface-ai.component.html',
  styleUrls: ['./editface-ai.component.css']
})
export class EditfaceAIComponent implements OnInit {

  constructor(private headerTitle :ServicesService) { }

title = ['Attention','Confident','Interested','Determined','Enthusiastic']

  ngOnInit(): void {
    this.headerTitle.setTitle('Full Stack Developer')
  }

}
