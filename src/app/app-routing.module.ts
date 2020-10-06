import { HomeComponent } from './home/home.component';
import { FunPresentsComponent } from './fun-presents/fun-presents.component';
import { SeriousPresentsComponent } from './serious-presents/serious-presents.component';
import { PresentsComponent } from './presents/presents.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'geschenke',
    component: PresentsComponent,
    children: [
      { path: 'ernste-geschenke', component: SeriousPresentsComponent },
      { path: 'geschenke-zum-spass', component: FunPresentsComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
