import { Component, OnInit }                from '@angular/core';

import { AssociatedOrganization }           from '../../models/assoc-org';
import { ASSOCIATED_ORGANIZATION }          from '../../app.resources';
import { ResourceService }                  from '../../services/resource';

@Component({
  selector: 'users-org-selection',
  templateUrl: './users-org-selection.html',
  styleUrls: [ './users-org-selection.css' ]
})
export class UsersOrgSelectionComponent implements OnInit {
    associatedOrganizations: AssociatedOrganization[];

    constructor(
        private resourceService: ResourceService,
    ) { }

    ngOnInit(): void {
        this.getAssociatedOrganizations();
    }

    getAssociatedOrganizations(): void {
        this.resourceService.getAll(ASSOCIATED_ORGANIZATION)
            .then(associatedOrganizations => {
                this.associatedOrganizations = associatedOrganizations.filter(org => org.isInvitationAccepted());
            });
    }
}
