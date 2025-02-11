import Paragraph from "./modules/Paragraph.js";

/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const result = document.querySelector('#output');

document
.querySelector('.wrapper > form')
.addEventListener('submit', e => {
   
  clearResults();
  
  e.preventDefault();
    const weight = parseFloat(e.target.elements.search.value | 0);  
   
    var weightData = 
    {
        w: weight,        
        get toLb() { return this.w * 2.2046; },
        get toGrams() { return this.w / 0.0010000; },
        get toOz() { return this.w * 35.274; }        
    }

      const parLB =  new Paragraph(`Lb: ${weightData.toLb.toFixed(1)}`);
      const parGrams =  new Paragraph(`Gr: ${weightData.toGrams.toFixed(1)}`);
      const parOz =  new Paragraph(`Oz: ${weightData.toOz.toFixed(1)}`);
      
      result.append(parLB, parOz, parGrams);
});

const clearResults = () => 
{
  const resDiv = document.querySelector("#output");
  console.log(resDiv)
  
  while (resDiv.firstChild) {
    console.log(resDiv.lastChild)
    resDiv.removeChild(resDiv.lastChild);
  }
}