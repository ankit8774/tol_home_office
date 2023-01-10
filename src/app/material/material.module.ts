import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
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
import { MatInputModule } from '@angular/material/input';import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatSidenavModule, MatDialogModule, MatButtonModule, MatSelectModule, MatFormFieldModule,MatTableModule,MatInputModule,MatDatepickerModule,
    MatIconModule,MatNativeDateModule,MatPaginatorModule,MatToolbarModule,MatSortModule,MatRadioModule,MatCheckboxModule,
    MatProgressSpinnerModule,MatMenuModule,MatSnackBarModule,MatTooltipModule,MatIconModule,MatTabsModule,MatButtonToggleModule,
  
  ],
  exports:[
    MatSidenavModule, MatDialogModule, MatButtonModule, MatSelectModule, MatFormFieldModule,MatTableModule,MatInputModule,MatDatepickerModule,
    MatIconModule,MatNativeDateModule,MatPaginatorModule,MatToolbarModule,MatSortModule,MatRadioModule,MatCheckboxModule,
    MatProgressSpinnerModule,MatMenuModule,MatSnackBarModule,MatTooltipModule,MatIconModule,MatTabsModule,MatButtonToggleModule,
   
  ]
})
export class MaterialModule { }
