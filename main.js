let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Estudiante de Ingeniería Química en la UANL. Me encanta la química, el diseño Web y el café.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
