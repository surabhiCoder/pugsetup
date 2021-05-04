import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateMaxDirective } from './directives/calculate-max.directive';

import { CapitalizeUserPipe } from './pipes/capitalize-user.pipe';
import { LowerCasePipe } from './pipes/lower-case.pipe';

import {Srv1Service} from './services/srv1.service';
import {Srv2Service} from './services/srv2.service';
import {ApiService} from './http/api.service'

@NgModule({
  declarations: [CalculateMaxDirective, CapitalizeUserPipe, LowerCasePipe],
  imports: [
    CommonModule
  ],
  providers:[Srv1Service,Srv2Service,ApiService]
})
export class CoreModule { }
