import { Injectable } from '@angular/core';

import { ResourceService } from '../../services/resource';

@Injectable()
export class CaseNumberRulesService {

  private resourceConfig = {
    BASE_URL: 'case_numbers/rules/{organisationId}'
  };

  constructor(private resourceService: ResourceService) {

  }

  getByOrganisationId(organisationId: number) {
    return this.resourceService.getById(this.resourceConfig, organisationId, {organisationId: organisationId});
  }

  save(data: any, organisationId: number) {
    return this.resourceService.create(this.resourceConfig, data, {organisationId: organisationId});
  }
}
