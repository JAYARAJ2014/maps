import faker from 'faker';
import { Mapable } from './CustomMap';

export class User implements Mapable{
    name: string; 
    location: {
        lat: number; 
        lng: number;
    };


    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent() {
        return `
        <div>
            <h3>${this.name} is here</h3>
        </div>
        `;
    }
}