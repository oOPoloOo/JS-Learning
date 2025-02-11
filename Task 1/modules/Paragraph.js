
class Paragraph{
    constructor(text){
      this.text = text;
      return this.render();
    }
    render()
    {      
      const paragraph = document.createElement('p');
      paragraph.setAttribute('class','results');
      const paragraphText = document.createTextNode(this.text);     
     
      paragraph.appendChild(paragraphText);
      return paragraph;
    }
  }
  
  export default Paragraph;