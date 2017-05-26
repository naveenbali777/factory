var merge = require('lodash/merge');

import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Module }                   from '../../models/module';
import { Role }                     from '../../models/role';

import { ORGANIZATION_MODULE }      from '../../app.resources';
import { ROLE }                     from '../../app.resources';

import { ResourceService }          from '../../services/resource';

@Component({
  selector: 'role-form',
  templateUrl: './role-form.html',
  styleUrls: [ './role-form.css' ]
})
export class RoleFormComponent implements OnInit {
    role: Role;

    constructor(
        private resourceService: ResourceService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getRole();
    }

    save(): void {
        // TODO: Validate
        this.resourceService.save(ROLE, this.role)
            .then(() => this.goBack());
    }

    cancel(): void {
        this.goBack();
    }

    private getRole(): void {
        this.role = new Role();

        let id;
        this.route.params.subscribe((params: Params) => id = +params['id']);

        if (!id) {
            this.resourceService.getAll(ORGANIZATION_MODULE).then(modules => {
                this.role.modules = modules;
                this.role.modules.forEach(module => {
                    module.permissions.forEach(permission => {
                        permission.granted = false;
                    });
                });
            });
        } else {
            this.resourceService.getById(ROLE, id).then(role => this.role = merge({}, role));
        }
    }

    private goBack(): void {
        this.location.back();
    }
}
