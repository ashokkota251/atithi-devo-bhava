import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterLayoutComponent } from './_components/layout/master-layout/master-layout.component';
import { NavBarComponent } from './_components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './_components/shared/footer/footer.component';
import { HomeComponent
       , AboutComponent
       , FeaturesComponent
       , ContactComponent
       , LivingComponent
       , DinningComponent
} from './_components/index';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ContactComponent,
    LivingComponent,
    DinningComponent,
    MasterLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
