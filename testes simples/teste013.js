function inLista(n, l) {
  if (l.indexOf(Number(n)) == -1) {
    return false;
  } else {
    return true;
  }
}

console.log(inLista(4, [1, 2, 3]));
