import { Router }               from '@angular/router';
import { Component, OnInit }    from '@angular/core';

import { Subscription }         from '../../models/subscription';
import { SUBSCRIPTION }         from '../../app.resources';
import { ResourceService }      from '../../services/resource';

@Component({
  selector: 'subscriptions',
  templateUrl: './subscriptions.html',
  styleUrls: [ './subscriptions.css' ]
})
export class SubscriptionsComponent implements OnInit {
    subscriptions: Subscription[];

    constructor(
        private resourceService: ResourceService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getSubscriptions()
    }

    getSubscriptions(): void {
        this.resourceService.getAll(SUBSCRIPTION).then(subscriptions => this.subscriptions = subscriptions);
    }
}
