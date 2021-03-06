import {BaseModel} from './base.model';
import {Facility} from './facility.model';

// tesis √∂zellikleri
export class FacilityAttribute extends BaseModel {
    public facilityId: number;
    public facility: Facility = new Facility();
    public key: string;
    public value: string;
    public sortOrder: number;
}
