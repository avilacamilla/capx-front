import { Territory } from '../models/territory.model.js';
import { Type } from '../models/type.model.js';
import { Organization } from '../models/organization.model.js';

export async function fetchOrganizations() {
    const response = await fetch('../../data/organizations.json');
    const data = await response.json();
    return data.map(org => Organization.fromJSON(org));
}

export async function fetchTerritories() {
    const response = await fetch('../../data/territory.json');
    const data = await response.json();
    return data.map(territory => Territory.fromJSON(territory));
}

export async function fetchTypes() {
    const response = await fetch('../../data/type.json');
    const data = await response.json();
    return data.map(type => Type.fromJSON(type));
}