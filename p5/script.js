let numeros = [];
let res = document.querySelector("#resultado");
let result = document.querySelector("#res");

function contar() {
  if (numeros.length == 0) {
    alert("A lista está vazia");
  } else {
    result.innerHTML = "";
    result.innerHTML += `<p>Numeros cadastrados: ${numeros.length}</p>`;
    result.innerHTML += `<p>Maior valor informado: ${max(numeros)}</p>`;
    result.innerHTML += `<p>Menor valor informado: ${min(numeros)}</p>`;

    let soma = 0;
    numeros.forEach((element) => {
      soma += element;
    });
    result.innerHTML += `<p>Soma dos valores: ${soma}</p>`;
    result.innerHTML += `<p>Media dos valores: ${soma / numeros.length}</p>`;
    window.alert(`${numeros}`);
    numeros = [];
    res.innerHTML = "";
  }
}
function adicionar() {
  let txti = window.document.querySelector("#txtinicio");
  i = Number(txti.value);
  result.innerHTML = "";

  if (i > 0 && i < 100) {
    if (!inLista(i, numeros)) {
      numeros.push(i);
      res.innerHTML += `<li>Valor ${i} adicionado</li>`;
    } else {
      window.alert("Valor já existente na lista!");
    }
  } else {
    window.alert("Valor incorreto");
  }
  txti.value = "";
  txti.focus();
}

function max(vet = []) {
  let max = vet[0];
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] > max) {
      max = vet[i];
    }
  }
  return max;
}

function min(vet = []) {
  let min = vet[0];
  for (let i = 0; i < vet.length; i++) {
    if (vet[i] < min) {
      min = vet[i];
    }
  }
  return min;
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) == -1) {
    return false;
  } else {
    return true;
  }
}
