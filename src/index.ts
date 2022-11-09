import { Statue } from "./Statue";
import { Artwork } from "./Artwork";

export interface artwork{
    title: string;
    year: number;
    price: number;
}


let szobrok: Artwork[] = [];

document.addEventListener('DOMContentLoaded', () => {
    

    
    let nevRegex = /^[a-zA-Z ,]$/;
    
    let osszDb = 0;
    let osszFt = 0;

    let felvesz = document.getElementById('felvesz') as HTMLInputElement;
    
    felvesz.addEventListener('click', () => {
        let nev = document.getElementById('nev') as HTMLInputElement;
        let ev = document.getElementById('ev') as HTMLInputElement;
        let ertek = document.getElementById('ertek') as HTMLInputElement;
        let magassag = document.getElementById('magassag') as HTMLInputElement;
        let db = document.getElementById('db') as HTMLOutputElement;
        let ossz = document.getElementById('ossz') as HTMLInputElement;
        let check = 0;
        //Név ellenőrzés
        if(nev.value== ""){
            alert("A név mező nem lehet üres");
        } else if(nevRegex.test(nev.value)){
            alert("A névben csak az angol ABC betűi, szóköz és , szerepelhet!")
        } else{
            check++;
        }

        //Évszám ellenőrzés
        if(parseInt(ev.value) > 2022)
        {
            alert("Az évszám nem lehet nagyobb az aktuális évnél!")
        }else{
            check++;
        }

        //Érték ellenőrzés
        if(parseInt(ertek.value) < 1){
            alert("Az értéknek legalább 1 Ft-nak kell lennie!")
        }else{
            check++;
        }

        //Magasság ellenőrzése
        if(parseInt(magassag.value) < 10){
            alert("A magasságnak minimum 10cm-nek kell lenni!")
        }else{
            check++;
        }

        //Form ellenőrzése
        if(check == 4){
            szobrok.push(new Statue(nev.value, parseInt(ev.value), parseInt(ertek.value), parseInt(magassag.value)));
            osszDb += 1;
            osszFt += parseInt(ertek.value);
            (document.getElementById('db') as HTMLOutputElement).value = osszDb.toString(); 
            (document.getElementById('ossz') as HTMLOutputElement).value = osszFt.toString(); 
        }
    })
})