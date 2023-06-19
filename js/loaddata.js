// creamos una clase para los trabajos con el id, el texto el enlace y el objetivo
class Trabajo {
  constructor(id, text, href, target) {
    this.id = id;
    this.text = text;
    this.href = href;
    this.target = target;
  }
}



// leemos y parseamos el fichero json que contiene los datos

fetch('data/portfolio.json')
  .then(response => response.json())
  .then(data => {
    const trabajos = data.map(portfolio => new Trabajo(portfolio.id, portfolio.text, portfolio.href, portfolio.target));

    // cargamos el nodo donde queremos introducir los trabajos
    const trabajosContainer = document.querySelector('.trabajos');

    
  // iteramos para crear  tantos trabajos como contenga el json

    trabajos.forEach((trabajo, index) => {

      // estraemos en variables separadas los
      const { id, text, href, target } = trabajo;


      // creamos el elemento div que contiene el trabajo
      const portfolioElemento = document.createElement('div');
      portfolioElemento.id = `portfolio${index + 1}`;
      portfolioElemento.classList.add('portfolio');


        // creamos la caja del enlace
      const boxTextportfolioElemento = document.createElement('div');
      boxTextportfolioElemento.classList.add('boxtextportfolio');
       // creamos el enlace
      const enlaceElemento = document.createElement('a');
      enlaceElemento.target = target;
      enlaceElemento.href = href;
      enlaceElemento.textContent = text;
      // insertamos el enlace en la caja 
      boxTextportfolioElemento.appendChild(enlaceElemento);
      portfolioElemento.appendChild(boxTextportfolioElemento);

      // añadimos el div completo del trabajo a la clase trabajos
      trabajosContainer.appendChild(portfolioElemento);
     
    });

    
  })
  .catch(error => {
    console.error('Error al cargar el archivo de datos:', error);
  });







