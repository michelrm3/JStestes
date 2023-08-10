function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("#res");

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade < 18) {
        //menor
        img.setAttribute("src", "imgs\\criança-homem.png");
      } else {
        //adulto
        img.setAttribute("src", "imgs\\adulto-homem.png");
      }
    } else {
      genero = "Mulher";
      if (idade < 18) {
        //menor
        img.setAttribute("src", "imgs\\criança-mulher.png");
      } else {
        //adulta
        img.setAttribute("src", "imgs\\adulta-mulher.png");
      }
    }

    res.innerHTML = `Gênero: ${genero}. <p>Idade calculada: ${idade}<\p>`;
    res.appendChild(img);
  }
}
