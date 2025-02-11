import CarCard from "./modules/CarCard.js";

/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const carsDiv = document.querySelector('#output');

window.addEventListener("load", (event) => {
    printCars();
});

let validEndpoint = true;
const printCars = async () => {
    try {
      
        
        while(validEndpoint)
        {
            const res = await fetch(`http://localhost:3000/${ENDPOINT}/${carCount}`);
            const car = await res.json();
            const carDiv = new CarCard(car);     
            carsDiv.appendChild(carDiv);
        }        
        
    } catch(err) {
        console.error(`Error:`, err);
        validEndpoint = false;
    }
    }
    