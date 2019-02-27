import { superHerosType } from "./factoryPattern";

export class superHeroFactory {
    public static getAvengers(type: number): superHerosType {
        let Avenger: superHerosType;
        if (type === 1) {
            Avenger = {
                superheroOne: 'Captain America',
                superheroTwo: 'Iron Man',
                superheroThree: 'Hulk'
            }
        } else {
            throw new Error('Given type for Averngers is not valid !')
        }
        
        return Avenger;
    }

    public static getXMan(type: number): superHerosType {
        let XMan: superHerosType;
        if(type === 2) {
            XMan = {
                superheroOne: 'Wolverine',
                superheroTwo: 'Cyclops',
                superheroThree: 'Storm'
            }
        } else {
            throw new Error('Given type for X-Man is not valid !')
        }

        return XMan;
    }
    public static getFantasticFour(type: number): superHerosType {
        let FantasticFour: superHerosType;
        if (type === 3) {
            FantasticFour = {
                superheroOne: 'Susan Storm',
                superheroTwo: 'Thing',
                superheroThree: 'Human Torch'
            }
        } else {
            throw new Error('Given type for X-Man is not valid !')
        }
        return FantasticFour;
    }
}