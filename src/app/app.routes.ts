import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { KitchenComponent } from './components/kitchen/kitchen.component';

export const routes: Routes = [
    {path:"", component:LandingpageComponent},
    {path:"home", component:HomepageComponent},
    {path:"kitchen", component:KitchenComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

