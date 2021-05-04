import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkComponent } from './framework.component';
import { FrameworkRoutingModule } from './framework-routing.module';

// import { ListModule } from 'Framework-ng/list';


@NgModule({
  declarations: [FrameworkComponent],
  imports: [
    CommonModule,
    FrameworkRoutingModule
  ]
})
export class FrameworkModule { }
