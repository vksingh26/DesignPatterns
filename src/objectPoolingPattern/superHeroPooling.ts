import { superHerosType } from "./factoryPattern";
import { superHeroFactory } from "./superHeroFactory";

export class superHeroPooling {
    
    private _avengerPool: superHerosType[] = [];
    private _xmanPool: superHerosType[] = [];
    private _fantasticFourPool: superHerosType[] = [];

    static AVENGERS_POOL_SIZE = 10;
    static XMAN_POOL_SIZE = 12;
    static FANTASTIC_POOL_SIZE = 15;

    constructor(private _type: number) {
        console.log(`_type: ${_type}`)
        // this.loadAvengersPool();
        // this.loadXmanPool();
        this.loadFantasticFourPool();
    }

    // loadAvengersPool(): any {
    //     for (let i = 0; i < superHeroPooling.AVENGERS_POOL_SIZE; i++){
    //         this._avengerPool.push(superHeroFactory.getAvengers(this._type))
    //     }
    // }

    // loadXmanPool(): any {
    //     for (let i = 0; i < superHeroPooling.XMAN_POOL_SIZE; i++){
    //         this._xmanPool.push(superHeroFactory.getXMan(this._type))
    //     }
    // }
    
    loadFantasticFourPool(): any {
        for (let i = 0; i < superHeroPooling.FANTASTIC_POOL_SIZE; i++){
            this._fantasticFourPool.push(superHeroFactory.getFantasticFour(this._type));
        }
    }
    
    private getPoolItem<T>(pool: T[], reloadFn: ()=> void):T {
        let item: T = pool.pop() as T;
        if (!pool.length) {
            reloadFn();
        }
        return item;
    }

    // public getAvengers(): superHerosType {
    //     return this.getPoolItem(this._avengerPool, this.loadAvengersPool.bind(this));
    // }

    // public getXman(): superHerosType {
    //     return this.getPoolItem(this._xmanPool, this.loadXmanPool.bind(this));
    // }

    public getFantasticFour(): superHerosType {
        return this.getPoolItem(this._fantasticFourPool, this.loadFantasticFourPool.bind(this));
    }
}