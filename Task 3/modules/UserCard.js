class UserCard{
    constructor({ login, avatar_url}){
      this.login = login;
      this.avatar_url = avatar_url;     
      return this.render();
    }
    render(){

      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'userCard');
     

      const image = document.createElement('img');
      image.setAttribute('src', this.avatar_url);
      image.setAttribute('alt', `${this.login} UserCard`); 
      image.setAttribute('width', '100%');
      

  
      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('class', 'infoDiv');
      
      const label = document.createElement('p');
      label.textContent = `Vartotojas`;
      const userName = document.createElement('p');
      userName.textContent = `${this.login}`;   
  
      infoDiv.append(label, userName);      
  
      cardDiv.append(image, infoDiv);
  
      return cardDiv;
    }
  }
  
  export default UserCard;