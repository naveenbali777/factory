export class CacheService {
    private _data: Object;

    constructor() {
        this._data = {};
    }

    putObject(key: string, value: any): void {
        this._data[key] = value
    }

    getObject(key: string): any {
        return this._data[key];
    }

    clear(): void {
        this._data = {};
    }
}
