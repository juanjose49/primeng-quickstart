import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import { Component, OnInit } from 'angular2/core';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
    selector: 'project-table',
    template: `
    <p-dataTable resizableColumns="true" [value]="projects" [rows]="10" [paginator]="true" selectionMode="single" [(selection)]="selectedProject" >
        <p-column field="projectName" header="Project Name" [sortable]="true" [filter]="true"></p-column>
        <p-column field="baseline" header="Baseline Name" [sortable]="true" [filter]="true"></p-column>
        <p-column field="date" header="Date"[sortable]="true" [filter]="true"></p-column>
    </p-dataTable>
    `,
    directives: [DataTable, Column]
    
})

export class ProjectTableComponent implements OnInit {

    public projects: Project[];
    public selectedProject: Project;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getProjects().then(cars => this.projects = cars);
    }
}