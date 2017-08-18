import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
MdGridListModule, MdTabsModule, MdInputModule, MdProgressBarModule
} from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { FormulariosComponent } from './formularios/formularios.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'formularios', component: FormulariosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent,
    HistoryComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    MdGridListModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdMenuModule,
    MdInputModule,
    MdProgressBarModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
