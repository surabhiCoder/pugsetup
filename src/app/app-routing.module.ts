import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : 'home',
    loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule)
  },
  { path : 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  { path : 'framework',
    loadChildren: () => import('./modules/framework/framework.module').then(m => m.FrameworkModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
