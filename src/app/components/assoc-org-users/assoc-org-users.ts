import { Component, OnInit }                    from '@angular/core';
import { ActivatedRoute }                       from '@angular/router';
import { Location }                             from '@angular/common';

import { AssociatedOrganization }               from '../../models/assoc-org';
import { User }                                 from '../../models/user';
import { ASSOCIATED_ORGANIZATION }              from '../../app.resources';
import { ASSOCIATED_ORGANIZATION_USER }         from '../../app.resources';
import { ResourceService }                      from '../../services/resource';

@Component({
  selector: 'assoc-org-users',
  templateUrl: './assoc-org-users.html',
  styleUrls: [ './assoc-org-users.css' ]
})
export class AssociatedOrganizationUsersComponent implements OnInit {
    associatedOrganization: AssociatedOrganization;
    users: User[];

    constructor(
        private resourceService: ResourceService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        let id = this.route.snapshot.params['id'];
        if (id !== 'current') {
            id = +id;
            this.resourceService.getById(ASSOCIATED_ORGANIZATION, id)
                .then(associatedOrganization => {
                    this.associatedOrganization = associatedOrganization;
                });
        }
        this.resourceService.getAll(ASSOCIATED_ORGANIZATION_USER, { 'associatedOrgId' : id })
            .then(users => this.users = users);
    }

    goBack(): void {
        this.location.back();
    }

}
