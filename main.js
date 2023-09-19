let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color:#506633 ;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#506633"> Pasante de la Licenciatura en Geología Ambiental y Recursos Hídricos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
