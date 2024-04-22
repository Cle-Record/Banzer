setTimeout(function() {
  const gosto = localStorage.opcaoSelecionada;
  if (gosto === "programacao") {
    window.location.href = `public/programar.html`;
  } else if (gosto === "animes") {
    window.location.href = `public/animes.html`;
  } else if (gosto === "robotica") {
    window.location.href = `public/robotica.html`;
  } else {
    window.location.href = `public/sigup.html`;
  }
}, 3000);