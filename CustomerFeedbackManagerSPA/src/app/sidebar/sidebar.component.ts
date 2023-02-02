import { Component, OnInit } from '@angular/core';
import { User } from '../helper/fake-back-end.interceptor';
import { first } from 'rxjs';
import { BackendApiService } from '../Service/backend-api.service';
import { AuthServiceService } from '../Service/auth-service.service';{}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loading = false;
  currentUser: User;
  userFromApi: User;
  public selectedItem: any;

  public groups=[ {  
    "id": 1,  
    "Menu": "dashboard",
    "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>',
    "url": '/item/item1.2',
  },  
  {  
    "id": 2,  
    "Menu": "product",
    "icon": '/src/app/asset/house.svg',
    "url": '/item/item1.2',
  },  
  {  
    "id": 3,  
    "Menu": "preferences"  ,
    "icon": '/src/app/asset/house.svg',
    "url": '/item/item1.2',
  },
  {  
    "id": 4,  
    "Menu": "customer"  ,
    "icon": '/src/app/asset/house.svg',
    "url": '/item/item1.2',
  },
];

  constructor(    private userService: BackendApiService,
    private authenticationService: AuthServiceService) {
      // this.currentUser = this.authenticationService.currentUserValue;
     }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
  }
  listClick(event: any, newValue: any) {
    console.log(newValue);
    this.selectedItem = newValue;  
}

}
