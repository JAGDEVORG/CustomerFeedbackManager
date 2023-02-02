import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
;
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { elementAt } from 'rxjs/operators';
import { MENU_ITEMS } from '../config/menus';
@Component({
    selector: 'ngx-product',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['product.component.scss'],
    template:
        `
      <ngx-one-column-layout    class="ip-layout">
      <nb-menu [items]="menu"  class="menu_custom" autoCollapse="true" ></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class ProductComponent {
    deviceInfo = null;
    menu: NbMenuItem[];
    userData = { 'UserId': 0 };
    constructor(private menuService: NbMenuService,
        private sidebarService: NbSidebarService,
    ) {

    }

    ngOnInit() {
        this.menu = MENU_ITEMS;
    }

}