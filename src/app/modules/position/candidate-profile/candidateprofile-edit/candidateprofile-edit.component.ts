import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services.service';

@Component({
  selector: 'app-candidateprofile-edit',
  templateUrl: './candidateprofile-edit.component.html',
  styleUrls: ['./candidateprofile-edit.component.css']
})
export class CandidateprofileEditComponent implements OnInit {

  constructor(private headertitleService:ServicesService) { }

  selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
     
        
      }
  

  ngOnInit(): void {
    this.headertitleService.setTitle('Edit Candidate Profile')
  }

}
