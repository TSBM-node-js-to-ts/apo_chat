import {InvalidRequestError} from "../../errors/InvalidRequestError.js";

export class ChatRoom {
    constructor({ id = null, createdBy }) {
        this.id = id;
        this.createdBy = createdBy;
        this._validate();
    }

    _validate() {
        if (!this.createdBy || this.createdBy.trim().length === 0) {
            throw new InvalidRequestError("createdBy must not be null");
        }
    }
}