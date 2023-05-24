let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Casa natal del Mayor")
  .pauseFor(200)
  .deleteChars(10)
  .start();

document.getElementById("sweetalert").addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    text: "Estamos trabajando en esta Sección",
  });
});

document.getElementById("form-button").addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    text: "Estamos trabajando en esta Sección",
  });
});
