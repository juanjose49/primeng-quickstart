import {Component} from 'angular2/core';
import {InputText} from 'primeng/primeng';
import {ProjectManagementComponent} from './project-management/project-management.component'}

@Component({
	selector: 'my-app',
	template: `
        <h1>My First 2 App</h1>
        <project-management></project-management>
    `,
    directives: [ProjectManagementComponent]
})
export class AppComponent {

    text: string;
}