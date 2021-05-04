import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';


// import { Action } from '../../../action/action';
// import { ActionConfig } from '../../../action/action-config';
// import { EmptyStateConfig } from '../../../empty-state/empty-state-config';
// import { ListEvent } from '../../list-event';
// import { ListConfig } from '../list-config';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-framework',
  templateUrl: './framework.component.pug',
  styleUrls: ['./framework.component.scss']
})

export class FrameworkComponent implements OnInit {
  flag : boolean = true;
  ngOnInit(): void {}
    
}
