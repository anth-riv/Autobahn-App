import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'data-grid', component: DataGridComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '/data-grid', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
