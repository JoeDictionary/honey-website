import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PresentsComponent } from './presents/presents.component';
import { HttpClientModule } from '@angular/common/http';
import { SeriousPresentsComponent } from './serious-presents/serious-presents.component';
import { FunPresentsComponent } from './fun-presents/fun-presents.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ImageHoverComponent } from './image-hover/image-hover.component';
import { PresentTypeComponent } from './present-type/present-type.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PresentsComponent,
    SeriousPresentsComponent,
    FunPresentsComponent,
    HomeComponent,
    FooterComponent,
    ImageHoverComponent,
    PresentTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
