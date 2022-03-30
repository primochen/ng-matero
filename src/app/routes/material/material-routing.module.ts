import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RippleComponent } from './ripple/ripple.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavBasicComponent } from './sidenav/basic-sidenav';
import { SidenavDualComponent } from './sidenav/dual-sidenav';
import { SidenavMobileComponent } from './sidenav/mobile-sidenav';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SortComponent } from './sort/sort.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import { TABS_DEMO_ROUTES } from './tab/routes';
import { TableComponent } from './table/table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent, data: { key: 'autocomplete' } },
  { path: 'checkbox', component: CheckboxComponent, data: { key: 'checkbox' } },
  { path: 'datepicker', component: DatepickerComponent, data: { key: 'datepicker' } },
  { path: 'form-field', component: FormFieldComponent, data: { key: 'form-field' } },
  { path: 'input', component: InputComponent, data: { key: 'input' } },
  { path: 'radio', component: RadioButtonComponent, data: { key: 'radio' } },
  { path: 'select', component: SelectComponent, data: { key: 'select' } },
  { path: 'slider', component: SliderComponent, data: { key: 'slider' } },
  { path: 'slide-toggle', component: SlideToggleComponent, data: { key: 'slide-toggle' } },
  // layout
  { path: 'card', component: CardComponent, data: { key: 'card' } },
  { path: 'divider', component: DividerComponent, data: { key: 'divider' } },
  { path: 'expansion', component: ExpansionPanelComponent, data: { key: 'expansion' } },
  { path: 'grid-list', component: GridListComponent, data: { key: 'grid-list' } },
  { path: 'list', component: ListComponent, data: { key: 'list' } },
  { path: 'stepper', component: StepperComponent, data: { key: 'stepper' } },
  { path: 'tab', component: TabComponent, children: TABS_DEMO_ROUTES, data: { key: 'tab' } },
  { path: 'tree', component: TreeComponent, data: { key: 'tree' } },
  // navigation
  { path: 'menu', component: MenuComponent, data: { key: 'menu' } },
  { path: 'sidenav', component: SidenavComponent, data: { key: 'sidenav' } },
  { path: 'sidenav/basic', component: SidenavBasicComponent, data: { key: 'sidenav/basic' } },
  { path: 'sidenav/dual', component: SidenavDualComponent, data: { key: 'sidenav/dual' } },
  { path: 'sidenav/mobile', component: SidenavMobileComponent, data: { key: 'sidenav/mobile' } },
  { path: 'toolbar', component: ToolbarComponent, data: { key: 'toolbar' } },
  // buttons-indicators
  { path: 'button', component: ButtonComponent, data: { key: 'button' } },
  { path: 'button-toggle', component: ButtonToggleComponent, data: { key: 'button-toggle' } },
  { path: 'badge', component: BadgeComponent, data: { key: 'badge' } },
  { path: 'chips', component: ChipsComponent, data: { key: 'chips' } },
  { path: 'icon', component: IconComponent, data: { key: 'icon' } },
  {
    path: 'progress-spinner',
    component: ProgressSpinnerComponent,
    data: { title: 'Progress Spinner', key: 'progress-spinner' },
  },
  { path: 'progress-bar', component: ProgressBarComponent, data: { key: 'progress-bar' } },
  { path: 'ripple', component: RippleComponent, data: { key: 'ripple' } },
  // popups-modals
  { path: 'bottom-sheet', component: BottomSheetComponent, data: { key: 'bottom-sheet' } },
  { path: 'dialog', component: DialogComponent, data: { key: 'dialog' } },
  { path: 'snack-bar', component: SnackBarComponent, data: { key: 'snack-bar' } },
  { path: 'tooltip', component: TooltipComponent, data: { key: 'tooltip' } },
  // Data table
  {
    path: 'data-table/paginator',
    component: PaginatorComponent,
    data: { key: 'data-table/paginator' },
  },
  { path: 'data-table/sort', component: SortComponent, data: { key: 'data-table/sort' } },
  { path: 'data-table/table', component: TableComponent, data: { key: 'data-table/table' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
