let amigo = [];
amigo = {
  nome: "João",
  sexo: "M",
  peso: 80,
  engordar(p = 0) {
    this.peso += p;
    return "engordou";
  },
};
console.log(typeof amigo);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
console.log(`${amigo.nome} ${amigo.engordar(3)} e pesa: ${amigo.peso}kg`);
