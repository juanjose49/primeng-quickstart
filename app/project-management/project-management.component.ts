import { Component } from 'angular2/core';
import {ProjectTableComponent} from './project-table.component';
import {ProjectService} from './project.service'

@Component({
    selector: 'project-management',
    template: '<project-table></project-table>',
    directives: [ProjectTableComponent],
    providers: [ProjectService]
})

export class ProjectManagementComponent{
    
}
