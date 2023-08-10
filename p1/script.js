function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  if (minutos < 10) {
    minutos = "0" + data.getMinutes();
  }
  msg.innerHTML = `Agora são ${hora}:${minutos}`;
  if (hora >= 0 && hora < 12) {
    //Bom dia!!
    img.src += "manha.png";
    document.body.style.background = "#dfddde";
  } else if (hora >= 12 && hora < 18) {
    //tarde
    img.src += "tarde.png";
    document.body.style.background = "#fccf47";
  } else {
    //noite
    img.src += "noite.png";
    document.body.style.background = "#075f69";
  }
}
