import { Component, OnInit }                    from '@angular/core';
import { Location }                             from '@angular/common';

import { Organization }                         from '../../models/org';
import { User }                                 from '../../models/user';
import { ORGANIZATION_USER }                    from '../../app.resources';
import { ResourceService }                      from '../../services/resource';

@Component({
  selector: 'org-users',
  templateUrl: './org-users.html',
  styleUrls: [ './org-users.css' ]
})
export class OrganizationUsersComponent implements OnInit {
    organization: Organization;
    users: User[];

    constructor(
        private resourceService: ResourceService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.resourceService.getAll(ORGANIZATION_USER)
            .then(users => this.users = users);
    }
}
