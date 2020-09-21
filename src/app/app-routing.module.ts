import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './_components/layout/master-layout/master-layout.component';
import { HomeComponent
  , AboutComponent
  , FeaturesComponent
  , ContactComponent
  , LivingComponent
  , DinningComponent
} from './_components/index';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: '', component: MasterLayoutComponent,
      children : [
          { path: 'home', component: HomeComponent }
        , { path: 'about', component: AboutComponent }
        , { path: 'features', component: FeaturesComponent }
        , { path: 'living', component: LivingComponent }
        , { path: 'dinning', component: DinningComponent }
        , { path: 'contact', component: ContactComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
