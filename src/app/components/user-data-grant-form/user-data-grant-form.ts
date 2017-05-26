import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User }                     from '../../models/user';
import { DATA_GRANT_VALUE }         from '../../app.resources';
import { ORGANIZATION_USER }        from '../../app.resources';
import { USER_DATA_GRANT }          from '../../app.resources';
import { ResourceService }          from '../../services/resource';

@Component({
  selector: 'user-data-grant-form',
  templateUrl: './user-data-grant-form.html',
  styleUrls: [ './user-data-grant-form.css' ]
})
export class UserDataGrantFormComponent implements OnInit {
    user: User;
    allDataGrants: any;

    currentAttribute: string;
    currentDataGrants: any;

    term: string;
    searchResults: any[];
    searched: boolean;

    changed: boolean;

    constructor(
        private resourceService: ResourceService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        // TODO: Remove hard-coded attribute name in the future
        // when data grants may be applied on multiple attributes.
        // Add a drop-down for user to select attribute.
        this.currentAttribute = 'Organization';

        let id = +this.route.snapshot.params['id'];
        this.resourceService.getById(ORGANIZATION_USER, id)
            .then(user => {
                this.user = user;
                this.resourceService.getAll(USER_DATA_GRANT, { 'userId' : this.user.id })
                    .then(dataGrants => {
                        this.allDataGrants = dataGrants
                        this.selectDataGrants();
                    });
            });
    }

    selectDataGrants(): void {
        this.currentDataGrants = this.allDataGrants.find(dataGrants => dataGrants.attribute === this.currentAttribute);
    }

    grant(valueToGrant: any): void {
        this.changed = true;
        this.currentDataGrants.values.push({ 'uuid' : valueToGrant.uuid, 'name' : valueToGrant.name });
        valueToGrant.isGranted = true;
    }

    revoke(valueToRevoke: any): void {
        this.changed = true;
        this.currentDataGrants.values = this.currentDataGrants.values.filter(value => value !== valueToRevoke);
        let value = this.searchResults.find(value => value.uuid === valueToRevoke.uuid);
        if (value) {
            value.isGranted = false;
        }
    }

    search(): void {
        this.resourceService.find(DATA_GRANT_VALUE, 
                                  { 'name' : this.term }, 
                                  { 'attribute' : this.currentAttribute })
            .then(results => {
                let grantedIds = this.currentDataGrants.values.map(value => value.uuid);
                this.searchResults = results;
                this.searchResults.forEach(value => {
                    value.isGranted = grantedIds.indexOf(value.uuid) > -1;
                });
                this.searched = true;
            });
    }

    save(): void {
        this.resourceService.create(USER_DATA_GRANT,
                                    this.currentDataGrants,
                                    { 'userId' : this.user.id })
            .then(() => this.goBack());
    }

    cancel(): void {
        this.goBack();
    }

    private goBack(): void {
        this.location.back();
    }
}
