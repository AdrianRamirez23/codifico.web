import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CurstomerComponent } from './curstomer/curstomer.component';
import { OrderviewComponent } from './orderview/orderview.component';

const routes: Routes = [
  {path: '', component: CurstomerComponent},
  {path: 'order/:id', component: OrderviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
