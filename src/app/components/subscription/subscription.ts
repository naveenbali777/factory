import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Subscription }             from '../../models/subscription';
import { SUBSCRIPTION }             from '../../app.resources';
import { ResourceService }          from '../../services/resource';

@Component({
  selector: 'subscription',
  templateUrl: './subscription.html',
  styleUrls: [ './subscription.css' ]
})
export class SubscriptionComponent implements OnInit {
    subscription: Subscription;

    constructor(
        private resourceService: ResourceService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getSubscription();
    }

    private getSubscription(): void {
        let id = +this.route.snapshot.params['id'];
        this.resourceService.getById(SUBSCRIPTION, id)
            .then(subscription => this.subscription = subscription);
    }

    goBack(): void {
        this.location.back();
    }
}
