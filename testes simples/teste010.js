let num = [5, 8, 2, 9, 3];
num[3] = 6;
num.push(1);
num.sort();
console.log(`Nosso vetor é o ${num}`);
console.log(`Nosso vetor tem ${num.length} posições`);

let i = 0;
num.forEach((element) => {
  console.log(`[${i++}]` + " - " + element);
});

console.log(`O valor 6 está na posição: ${num.indexOf(6)}`);
console.log(`${num[1]}`);
