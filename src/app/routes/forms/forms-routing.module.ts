import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsElementsComponent } from './elements/elements.component';
import { FormsSelectComponent } from './select/select.component';
import { FormsDynamicComponent } from './dynamic/dynamic.component';
import { FormsDatetimeComponent } from './datetime/datetime.component';

const routes: Routes = [
  { path: 'elements', component: FormsElementsComponent, data: { key: 'elements' } },
  { path: 'dynamic', component: FormsDynamicComponent, data: { key: 'dynamic' } },
  { path: 'select', component: FormsSelectComponent, data: { key: 'select' } },
  { path: 'datetime', component: FormsDatetimeComponent, data: { key: 'datetime' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
