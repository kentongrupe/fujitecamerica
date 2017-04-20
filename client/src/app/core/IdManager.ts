export class IdManager {

    public static getNew(): number {
        let id = (new Date()).getTime();
        if (id > this._id) {
            this._id = id;
        } else {
            this._id++;
        }
        return this._id;
    }

    private static _id: number = (new Date()).getTime();
}
