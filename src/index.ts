import { Company } from './Company';
import {User} from './User';
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap('mapDiv');
const user = new User();
const company =  new Company();

customMap.addMarker(user);
customMap.addMarker(company);
