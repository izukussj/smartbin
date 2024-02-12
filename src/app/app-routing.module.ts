import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinsListComponent } from './components/bins-list/bins-list.component';
import { AddBinComponent } from './components/add-bin/add-bin.component';
const routes: Routes = [
  { path: '', redirectTo: 'bins', pathMatch: 'full' },
  { path: 'bins', component: BinsListComponent },
  { path: 'add', component: AddBinComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
