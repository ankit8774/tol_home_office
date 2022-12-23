import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  loading: boolean = false;
 
  
  constructor(private headerTitleService:ServicesService) { }

  ngOnInit(): void {
    this.headerTitleService.setTitle('Add Client')
  }

}
