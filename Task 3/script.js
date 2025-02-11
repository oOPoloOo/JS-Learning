import UserCard from "./modules/UserCard.js";

/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const button = document.querySelector('#btn');
const usersDiv = document.querySelector('#output');

button.addEventListener('click', e => {
    e.preventDefault();
    printUserCards();
    clearShowText();
});



const printUserCards = () => 
{
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(users => {  
    
    users.forEach( user => 
    {      
      const userDiv = new UserCard(user);     
      usersDiv.appendChild(userDiv);
    });
  });
}

const clearShowText = () => 
{
    const showMsg = document.querySelector("#message");
    showMsg.remove();
}
