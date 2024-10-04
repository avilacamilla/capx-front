export class Type {
    constructor(id, code, name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    static fromJSON(json) {
        return new Type(json.id, json.type_code, json.type_name);
    }
}
