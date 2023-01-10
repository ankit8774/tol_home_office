import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

import { UsersComponent } from './modules/users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './material/material.module';

import { AddusersComponent } from './modules/users/addusers/addusers.component';

import { ClientComponent } from './modules/client/client.component';
import { AddClientComponent } from './modules/client/add-client/add-client.component';
import { PositionComponent } from './modules/position/position.component';
import { AddPositionComponent } from './modules/position/add-position/add-position.component';
import { ProfilePositionComponent } from './modules/profile-position/profile-position.component';
import { ScreeningInviteeComponent } from './modules/position/screening-invitee/screening-invitee.component';
import { ProfileInviteComponent } from './modules/position/profile-invite/profile-invite.component';
import { CandidateProfileComponent } from './modules/position/candidate-profile/candidate-profile.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { UserEditComponent } from './modules/users/user-edit/user-edit.component';
import { CandidateprofileEditComponent } from './modules/position/candidate-profile/candidateprofile-edit/candidateprofile-edit.component';
import { ScreeningComponent } from './modules/screening/screening.component';
import { InterviewcalenderComponent } from './modules/dashboard/interviewcalender/interviewcalender.component';
import { EditfaceAIComponent } from './modules/profile-position/editface-ai/editface-ai.component';
import { EditPositionComponent } from './modules/position/edit-position/edit-position.component';
import { ReportComponent } from './modules/profile-position/report/report.component';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    UsersComponent,
    AddusersComponent,
    ClientComponent,
    AddClientComponent,
    PositionComponent,
    AddPositionComponent,
    ProfilePositionComponent,
    ScreeningInviteeComponent,
    ProfileInviteComponent,
    CandidateProfileComponent,
    HeaderComponent,
    FooterComponent,
    UserEditComponent,
    CandidateprofileEditComponent,
    ScreeningComponent,
    InterviewcalenderComponent,
    EditfaceAIComponent,
    EditPositionComponent,
    ReportComponent,
   
  ],

  imports: [
    MaterialModule,
  
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxPaginationModule,    
    HttpClientModule,

   


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
