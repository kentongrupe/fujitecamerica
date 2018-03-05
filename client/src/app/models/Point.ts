import {
    BaseModel
} from 'app/core';

export class Point extends BaseModel {

    public x: number = 0;
    public y: number = 0;

    constructor(x: number = 0, y: number = 0) {
        super('Point');

        this.x = x;
        this.y = y;
    }
}
