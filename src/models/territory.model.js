export class Territory {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static fromJSON(json) {
        return new Territory(json.id, json.territory_name);
    }
}
