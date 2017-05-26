import { Router }               from '@angular/router';
import { Component, OnInit }    from '@angular/core';

import { OrganizationInvite }   from '../../models/org-invite';
import { ORGANIZATION_INVITE }  from '../../app.resources';
import { ResourceService }      from '../../services/resource';

@Component({
  selector: 'org-invites',
  templateUrl: './org-invites.html',
  styleUrls: [ './org-invites.css' ]
})
export class OrganizationInvitesComponent implements OnInit {
    organizationInvites: OrganizationInvite[];

    constructor(
        private resourceService: ResourceService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getOrganizationInvites()
    }

    getOrganizationInvites(): void {
        this.resourceService.getAll(ORGANIZATION_INVITE)
            .then(organizationInvites => this.organizationInvites = organizationInvites);
    }
}
