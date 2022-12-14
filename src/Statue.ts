import { artwork } from "./index";

export class Statue implements artwork{
    title: string;
    year: number;
    price: number;
    height: number;

    constructor(title: string, year: number, price: number, height: number){
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}
