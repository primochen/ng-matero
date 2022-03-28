import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Menu, MenuService } from '@core/bootstrap/menu.service';
import { SidenavRouteInterface, TabService } from '@shared/services/tab.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidemenuComponent {
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menu$ = this.menu.getAll();
  buildRoute = this.menu.buildRoute;

  public tabs: SidenavRouteInterface[] = [];

  constructor(private menu: MenuService, private tabService: TabService) {
    this.tabs = tabService.tabs;
  }

  // changeRoute(name: string, link: string): void {
  //   // console.log(menu);
  //   this.onAddTab(menu);
  //   // if (menu.isNewLink) {
  //   //   this.menus = this.cloneMenuArray(this.copyMenus);
  //   //   if (this.themesMode === 'top' && !this.isOverMode) {
  //   //     this.closeMenu();
  //   //   }
  //   //   this.doc.body.click();
  //   //   window.open(menu.path, '_blank');
  //   //   return;
  //   // }
  //   // this.router.navigate([menu.path]);
  // }

  onAddTab(name: string, link: string): void {
    let isNotContain = true;
    this.tabs.forEach(tab => {
      if (tab.name === name) {
        // this.tabs.splice(index, 1);
        // this.selected.setValue(this.previousTab?.id);
        // this.router.navigate([this.previousTab?.link]);
        // console.log('onAddTab:'+name);
        isNotContain = false;
        // sessionStorage.setItem(this.sessionKey, JSON.stringify(this.previousTab));
      }
    });
    // console.log('isNotContain:'+isNotContain);
    if (isNotContain) {
      // console.log('onAddTab');
      this.tabs.push({ name, link });
    }
  }
}
