import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { FooterComponent } from 'src/app/modules/footer/footer.component';
import { AddusersComponent } from 'src/app/modules/users/addusers/addusers.component';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    // AppModule
  ],
  exports:[
    
    // HeaderComponent,
    // FooterComponent,
    // AddusersComponent
    // UsersComponent
  ],
  providers: [],
  schemas: []
})
export class UserModule { }
