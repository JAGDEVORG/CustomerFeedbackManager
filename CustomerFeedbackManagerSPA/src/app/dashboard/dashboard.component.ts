import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MENU_ITEMS } from '../config/menus';

@Component({
  selector: 'ngx-dashboard',
  template:
    `  <ngx-one-column-layout    class="ip-layout">
    <nb-menu [items]="menu"  class="menu_custom" autoCollapse="false" ></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
  menu: NbMenuItem[];
  constructor(private cdRef: ChangeDetectorRef,
    private menuService: NbMenuService, private sidebarService: NbSidebarService,
  ) {
  }
  private destroy$: Subject<void> = new Subject<void>();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }

}
