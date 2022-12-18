console.log("ust sayi bulma");

let sayi = +prompt("sayi giriniz");

let sayac = 0;
let sonuc = 1;
while (sonuc >= 1) {
  sonuc = sayi /= 10;
  sayac += 1;
}
alert(sayac);
