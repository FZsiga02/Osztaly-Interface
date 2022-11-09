import { artwork } from "./index";

export class Artwork implements artwork{
    title: string;
    year: number;
    price: number;

    constructor(title: string, year: number, price: number){
        this.title = title;
        this.year = year;
        this.price = price;
    }
}