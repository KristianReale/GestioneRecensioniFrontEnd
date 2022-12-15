import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaRecensioniComponent } from './visualizza-recensioni/visualizza-recensioni.component';



const routes: Routes = [
  { path: 'visualizzarecensioni', component: VisualizzaRecensioniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
