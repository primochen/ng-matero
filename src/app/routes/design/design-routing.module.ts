import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignColorsComponent } from './colors/colors.component';
import { DesignIconsComponent } from './icons/icons.component';

const routes: Routes = [
  { path: 'colors', component: DesignColorsComponent, data: { key: 'colors' } },
  { path: 'icons', component: DesignIconsComponent, data: { key: 'icons' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignRoutingModule {}
