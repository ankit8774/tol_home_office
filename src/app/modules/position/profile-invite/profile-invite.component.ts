import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-profile-invite',
  templateUrl: './profile-invite.component.html',
  styleUrls: ['./profile-invite.component.css']
})
export class ProfileInviteComponent implements OnInit {

  constructor(private headerTitleService:ServicesService) { }

  selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
     
        
      }
  
  

  ngOnInit(): void {
    this.headerTitleService.setTitle('Full Stack Developer')
  }

}
