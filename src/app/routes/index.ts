import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@modules/home/app';
import { AboutComponent } from '@modules/about/app';
import { ServiceComponent } from '@modules/service/app';
import { TeamComponent } from '@modules/team/app';
import { PortfolioComponent } from '@modules/portfolio/app';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'team', component: TeamComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

export const routing = RouterModule.forRoot(routes);
