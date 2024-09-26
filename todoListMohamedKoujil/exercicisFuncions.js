const showResult = (fun) => {
  let container = document.getElementById("result");
  container.innerHTML = "";
  let div = document.createElement("div");
  div.textContent = fun;
  div.classList.add("animate__animated", "animate__fadeIn");
  container.appendChild(div);
};

const comparaNumeros = (a, b) => {
  console.clear();
  if (a > b) console.log("Num a: " + a);
  else console.log("Num b: " + b);
};

const suma1a100 = (number = 1) => {
  let n = number;
  for (let i = 1; i < 100; i++) {
    n += i;
  }
  console.clear();
  console.log(n);
};

const PedraPaper = () => {
  console.clear();
  for (let i = 1; i <= 20; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Tisores");
    } else {
      i % 3 == 0 ? console.log("Pedra") : i % 5 == 0 && console.log("Paper");
    }
  }
};

const esParell = (num) => {
  console.clear();
  console.log(num % 2 == 0);
};

const revertirCadena = (cadena) => {
  console.clear();
  console.log(cadena.split("").reverse().join(""));
};

const factorial = (numero) => {
  console.log(rec(numero));
};

const rec = (numero) => {
  console.clear();
  if (numero <= 1) return 1;
  else return rec(numero - 1) * numero;
};

const filtrarPositius = (array) => {
  console.clear();
  console.log(
    array.filter((item) => {
      if (item > 0) return item;
    })
  );
};
