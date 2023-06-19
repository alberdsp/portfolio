




// creamos un efecto de escritura 

var i = 0;
var txt = 'consultoría - programación - implantación';
var speed = 80;

function maquinaEscribir() {





  if (i < txt.length) {
    document.getElementById("consultoria").innerHTML += txt.charAt(i);
    i++;
    
    setTimeout(maquinaEscribir, speed);

    
  }
 
}

window.addEventListener('load', function() {
  maquinaEscribir();
});



// Efecto para los skills
// cargamos los nodos skills
const smallSkillsElements = document.querySelectorAll('.smskills img');

smallSkillsElements.forEach(imageElement => {
  imageElement.addEventListener('mouseover', () => {
    imageElement.style.transform = 'rotate(360deg)';
  });

  imageElement.addEventListener('mouseout', () => {
    imageElement.style.transform = 'rotate(0deg)';
  });
});
