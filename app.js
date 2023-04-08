const qatorlar = document.querySelectorAll(".qator");
const resetBtn = document.getElementById("btn");
const natijaText = document.getElementById("natija");

const natijalar = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boshliq = ["", "", "", "", "", "", "", "", ""];
let birinchiOyinchi = "X";
let boshlash = false;

oyinBoshi();

function oyinBoshi() {
  qatorlar.forEach((qator) => qator.addEventListener("click", qatorBosish));
  resetBtn.addEventListener("click", qaytaBos);
  natijaText.textContent = `${birinchiOyinchi} boshlasin`;
  boshlash = true;
}

function qatorBosish() {
  const indexSon = this.getAttribute("indexSon");
  if (boshliq[indexSon] != "" || !boshlash) {
    return;
  }

  yangiQator(this, indexSon);
  galaba();
}

function yangiQator(qator, index) {
  boshliq[index] = birinchiOyinchi;
  qator.textContent = birinchiOyinchi;
}

function yangiOyinchi() {
  birinchiOyinchi = birinchiOyinchi == "X" ? "0" : "X";
  natijaText.textContent = `${birinchiOyinchi} bossin`;
}

function galaba() {
  let yangi = false;
  for (let i = 1; i < natijalar.length; i++) {
    const holat = natijalar[i];
    const qatorA = boshliq[holat[0]];
    const qatorB = boshliq[holat[1]];
    const qatorC = boshliq[holat[2]];
    if (qatorA == "" || qatorB == "" || qatorC == "") {
      continue;
    }
    if (qatorA == qatorB && qatorB == qatorC) {
      yangi = true;
      break;
    }
  }
  if (yangi) {
    natijaText.textContent = `${birinchiOyinchi} o'yinchi  galaba qildi`;
    boshlash = false;
  } else if (!boshliq.includes("")) {
    natijaText.textContent = `Durrang`;
    boshlash = false;
  } else {
    yangiOyinchi();
  }
}

function qaytaBos() {
  birinchiOyinchi = "X";
  boshliq = ["", "", "", "", "", "", "", "", ""];
  natijaText.textContent = `${birinchiOyinchi} boshlasin`;
  qatorlar.forEach((qator) => (qator.textContent = ""));
  boshlash = true;
}
