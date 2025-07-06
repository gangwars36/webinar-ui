import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarRoutingModule } from './webinar-routing.module';
import { WebinarListComponent } from './components/webinar-list/webinar-list.component';
import { WebinarCardComponent } from './components/webinar-card/webinar-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WebinarListComponent,
    WebinarCardComponent,
    SidebarComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    WebinarRoutingModule,
    HttpClientModule
  ]
})
export class WebinarModule { }
