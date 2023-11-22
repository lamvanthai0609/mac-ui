import { NgModule } from '@angular/core';
import { SideBarComponent, TaskBarComponent } from './components';
import { LayoutComponent } from './layout.component';
import { CommonModule } from "@angular/common";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SideBarComponent,
    TaskBarComponent,
    LayoutComponent
  ],
  imports: [CommonModule,MatTooltipModule,MatIconModule ,FontAwesomeModule],
  providers: [],
  exports: [LayoutComponent]
})
export class LayoutModule { }
