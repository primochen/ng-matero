import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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

  private flattenDeep(arr1: any) {
    return arr1.reduce((acc: any, val: any) => {
      // console.log(val.items)
      return Array.isArray(val.children)
        ? acc.concat(this.flattenDeep(val.children))
        : acc.concat(val);
    }, []);
  }

  public tabs: SidenavRouteInterface[] = [];

  constructor(
    private menu: MenuService,
    public router: Router,
    // private route:ActivatedRoute,
    private tabService: TabService
  ) {
    this.tabs = tabService.tabs;

    //*****************
    let isNotContain = true;
    // console.log(this.tabService.tabs);
    this.tabService.tabs.forEach(tab => {
      if (tab.link === this.router.url) {
        isNotContain = false;
      }
    });
    // console.log(isNotContain);
    // console.log(isNotContain)
    // console.log(this.router.url)
    // console.log(this.tabService.tabs)
    // console.log(this.appMenuComponent.model)
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#browser_compatibility

    if (isNotContain) {
      // this.router.events
      //    .subscribe((event) => {
      //      console.log('this is what your looking for ', event);
      //   });

      // console.log(this.route.snapshot.pathFromRoot);

      this.menu$.subscribe(value => {
        // console.log(value);
        const tabArray = this.flattenDeep(value);
        // console.log(tabArray);
        // console.log(this.router.url);
        const tabArray2 = tabArray.filter(
          (e: { route: string }) => e.route && this.router.url.endsWith(e.route)
        );
        // console.log(tabArray2[0]);
        // console.log(tabArray2[0].name);
        this.tabs.push({ name: tabArray2[0].name, link: this.router.url });
      });

      // console.log(this.router.config);
      // const tabArray = this.flattenDeep(this.router.config);
      // console.log(tabArray);
      // const tabArray2 = tabArray.filter((e: { routerLink: string[]; }) => e.routerLink && e.routerLink[0] === this.router.url);
      // console.log(tabArray2);
      // console.log(tabArray2[0].label)
      // console.log(tabArray2[0].routerLink)

      // this.tabService.tabs.push({ label: tabArray2[0].label, link: this.router.url ,isVisible: true, isDisabled: false});
      // setTimeout(() => {
      //       this.tabService.selectedIndex = this.tabService.tabs.length - 1
      //   }, 200);
      // console.log(this.router.config);
    }

    //*****************
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
