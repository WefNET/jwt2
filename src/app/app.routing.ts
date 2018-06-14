import { RouterModule } from '@angular/router';

import { ArmorCalcComponent } from './components/armor-calc/armor-calc.component';
import { HomeComponent } from './components/home/home.component';
import { FaithCalcComponent } from './components/faith-calc/faith-calc.component';
import { ServersComponent } from './components/servers/servers.component';


const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home'} },
  { path: 'armor-calc', component: ArmorCalcComponent, data: { state: 'armor-calc'} },
  { path: '**', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});