"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let szobrok = [];
document.addEventListener('DOMContentLoaded', () => {
    let nevRegex = /^[a-zA-Z ,]$/;
    let osszDb = 0;
    let osszFt = 0;
    let felvesz = document.getElementById('felvesz');
    felvesz.addEventListener('click', () => {
        let nev = document.getElementById('nev');
        let ev = document.getElementById('ev');
        let ertek = document.getElementById('ertek');
        let magassag = document.getElementById('magassag');
        let db = document.getElementById('db');
        let ossz = document.getElementById('ossz');
        let check = 0;
        //Név ellenőrzés
        if (nev.value == "") {
            alert("A név mező nem lehet üres");
        }
        else if (nevRegex.test(nev.value)) {
            alert("A névben csak az angol ABC betűi, szóköz és , szerepelhet!");
        }
        else {
            check++;
        }
        //Évszám ellenőrzés
        if (parseInt(ev.value) > 2022) {
            alert("Az évszám nem lehet nagyobb az aktuális évnél!");
        }
        else {
            check++;
        }
        //Érték ellenőrzés
        if (parseInt(ertek.value) < 1) {
            alert("Az értéknek legalább 1 Ft-nak kell lennie!");
        }
        else {
            check++;
        }
        //Magasság ellenőrzése
        if (parseInt(magassag.value) < 10) {
            alert("A magasságnak minimum 10cm-nek kell lenni!");
        }
        else {
            check++;
        }
        //Form ellenőrzése
        if (check == 4) {
            szobrok.push(new Statue_1.Statue(nev.value, parseInt(ev.value), parseInt(ertek.value), parseInt(magassag.value)));
            osszDb += 1;
            osszFt += parseInt(ertek.value);
            document.getElementById('db').value = osszDb.toString();
            document.getElementById('ossz').value = osszFt.toString();
        }
    });
});
