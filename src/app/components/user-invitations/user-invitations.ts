import { Router }               from '@angular/router';
import { Component, OnInit }    from '@angular/core';

import { UserInvitation }       from '../../models/user-invitation';
import { USER_INVITATION }      from '../../app.resources';
import { ResourceService }      from '../../services/resource';

@Component({
  selector: 'user-invitations',
  templateUrl: './user-invitations.html',
  styleUrls: [ './user-invitations.css' ]
})
export class UserInvitationsComponent implements OnInit {
    userInvitations: UserInvitation[];

    constructor(
        private resourceService: ResourceService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getUserInvitations()
    }

    getUserInvitations(): void {
        this.resourceService.getAll(USER_INVITATION)
            .then(userInvitations => this.userInvitations = userInvitations);
    }
}
