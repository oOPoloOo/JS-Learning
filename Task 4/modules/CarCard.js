class CarCard{
    constructor({ brand, models}){
      this.brand = brand;
      this.models = models;     
      return this.render();
    }
    render(){

      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('class', 'userCard');
     
      const labelDiv = document.createElement('div');
      const brand = document.createElement('p');
      brand.textContent = `${this.brand}`;
      labelDiv.append(brand); 

    //   labelDiv.setAttribute('class', 'labelDiv');

    //   const image = document.createElement('img');
    //   image.setAttribute('src', this.avatar_url);
    //   image.setAttribute('alt', `${this.login} UserCard`); 
    //   image.setAttribute('width', '100%');
      

  
      const infoDiv = document.createElement('div');
      models.forEach(mod => {
        const model = document.createElement('p');
        model.textContent = `${mod}`;   
    
        infoDiv.append(model);      
      });
    //   infoDiv.setAttribute('class', 'infoDiv');
      
     
    //   const userName = document.createElement('p');
    //   userName.textContent = `${this.login}`;   
  
    //   infoDiv.append(label, userName);      
  
      cardDiv.append(labelDiv, infoDiv);
  
      return cardDiv;
    }
  }
  
  export default CarCard;