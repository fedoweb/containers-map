export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    translate(code) {
        if(!(this.errors.has(code))) {
            throw new Error("Unknown error")
        }
        return this.errors.get(code);
    }
}