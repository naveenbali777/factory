import { Router }                           from '@angular/router';
import { Component }                        from '@angular/core';
import { Location }                         from '@angular/common';

import { Organization }                     from '../../models/org';
import { ORGANIZATION }                     from '../../app.resources';
import { ResourceService }                  from '../../services/resource';

@Component({
  selector: 'org-search',
  templateUrl: './org-search.html',
  styleUrls: [ './org-search.css' ]
})
export class OrganizationSearchComponent {
    term: string;
    organizations: Organization[];
    searched: boolean;

    constructor(
        private resourceService: ResourceService,
        private router: Router,
        private location: Location
    ) { }

    search(): void {
        this.resourceService.find(ORGANIZATION, { 'name' : this.term })
            .then(organizations => {
                this.organizations = organizations;
                this.searched = true;
            });
    }

    cancel(): void {
        this.goBack();
    }

    add(): void {
        this.router.navigate(['/associated-organizations/new']);
    }

    private goBack(): void {
        this.location.back();
    }
}
