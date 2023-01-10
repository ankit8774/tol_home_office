import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './modules/client/add-client/add-client.component';
import { ClientComponent } from './modules/client/client.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InterviewcalenderComponent } from './modules/dashboard/interviewcalender/interviewcalender.component';
import { AddPositionComponent } from './modules/position/add-position/add-position.component';
import { CandidateProfileComponent } from './modules/position/candidate-profile/candidate-profile.component';
import { CandidateprofileEditComponent } from './modules/position/candidate-profile/candidateprofile-edit/candidateprofile-edit.component';
import { EditPositionComponent } from './modules/position/edit-position/edit-position.component';
import { PositionComponent } from './modules/position/position.component';
import { ProfileInviteComponent } from './modules/position/profile-invite/profile-invite.component';
import { ScreeningInviteeComponent } from './modules/position/screening-invitee/screening-invitee.component';
import { EditfaceAIComponent } from './modules/profile-position/editface-ai/editface-ai.component';
import { ProfilePositionComponent } from './modules/profile-position/profile-position.component';
import { ReportComponent } from './modules/profile-position/report/report.component';
import { ScreeningComponent } from './modules/screening/screening.component';
import { AddusersComponent } from './modules/users/addusers/addusers.component';
import { UserEditComponent } from './modules/users/user-edit/user-edit.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [

  {path: '', redirectTo:'dashboard',pathMatch:'full'},

  {path: 'dashboard',  component: DashboardComponent},
  
  {path: 'user', component: UsersComponent},


  {path: 'addUser', component: AddusersComponent},
  {path: 'EditUser', component: UserEditComponent},

  {path: 'client', component:ClientComponent},
  {path: 'addClient', component:AddClientComponent},

  {path: 'position', component:PositionComponent},
  {path: 'addPosition', component:AddPositionComponent},
  {path: 'editPosition', component:EditPositionComponent},
  {path: 'profilePosition', component:ProfilePositionComponent},
  
  {path: 'screeningInvitee', component: ScreeningInviteeComponent},
  {path: 'profileInvite', component: ProfileInviteComponent},  
  {path: 'candidateProfile', component: CandidateProfileComponent},
  {path: 'candidateprofileEdit', component: CandidateprofileEditComponent},


  {path: 'screening', component: ScreeningComponent},
  {path: 'intervierCalender', component: InterviewcalenderComponent},
  {path: 'editfaceAI', component: EditfaceAIComponent},
  {path: 'report', component: ReportComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
