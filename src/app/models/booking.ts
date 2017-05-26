import {Model} from './base/model.base';
import {PipoInformations} from './pipo';

export class Booking extends Model {
  bookingId: string;
  status: string;
  pipoInformations: PipoInformations[];
  productCategory: string;
  shipmentDate: number;
  toOrganizationId: number;
  fromOrganizationId: number;
}

