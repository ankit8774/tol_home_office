import { NgModule } from '@angular/core';
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

import {MatTabsModule} from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddusersComponent } from './modules/users/addusers/addusers.component';
import {MatMenuModule} from '@angular/material/menu';


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
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxPaginationModule,

    MatSidenavModule, MatDialogModule, MatButtonModule, MatSelectModule, MatFormFieldModule,MatTableModule,MatInputModule,MatDatepickerModule,
    HttpClientModule,MatIconModule,MatNativeDateModule,MatPaginatorModule,MatToolbarModule,MatSortModule,MatRadioModule,MatCheckboxModule,
    MatProgressSpinnerModule,MatMenuModule,MatSnackBarModule,MatTooltipModule,MatIconModule,MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
