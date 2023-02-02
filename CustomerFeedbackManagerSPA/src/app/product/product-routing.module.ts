import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { TestProductComponent } from './test-product/test-product.component';

const routes: Routes = [{

  path: '',
  component: ProductComponent,
  children: [
    
    {
      path: 'TestProduct',
      component: TestProductComponent,
    }
   
  
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {

}

