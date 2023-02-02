import { NbMenuItem } from '@nebular/theme';


export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'DashBoard',
    icon: 'layout-outline',
    link: '/DashBoard/CommanDashBoard',
  

},
  {
    title: 'Product',
    icon: 'layout-outline',
    children: [
     
      {
        title: 'Test Product',
        icon: 'person-add',
        link: '/Product/TestProduct',
      },
   
    ]
  },
  {
    title: 'Customer',
    icon: 'layout-outline',
    children: [
      // {
      //   title: 'DashBoard',
      //   icon: 'shopping-cart-outline',
      //   link: '/Accounting/BranchType',
      //   home: true,
      // },
    ]    

     
  },

 
];
