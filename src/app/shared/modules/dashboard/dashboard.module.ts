import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { FooterComponent } from 'src/app/modules/footer/footer.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ]
})
export class DashboardModule { }
