import { SalonService } from './SalonService';

export interface SalonOffering {
    hairServices: SalonService[];
    nailServices: SalonService[];
    colorServices: SalonService[];
}