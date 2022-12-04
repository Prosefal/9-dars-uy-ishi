var elForm = document.querySelector(".jsform");
var elInput = document.querySelector(".form-input");
var elText1 = document.querySelector(".text1");
var elText2 = document.querySelector(".text2");
var elText3 = document.querySelector(".text3");
var elText4 = document.querySelector(".text4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  function piyodaTezligi(elInputValue, piyoda) {
    var piyoda = 3.6;
    var elInputValue = +elInput.value;
    return (elInputValue / piyoda).toFixed(1) + " Soat";
  }
  elText1.textContent = piyodaTezligi();

  function velosipedTezligi(elInputValue, velosiped) {
    var velosiped = 20.1;
    var elInputValue = +elInput.value;
    return (elInputValue / velosiped).toFixed(1) + " Soat";
  }
  elText2.textContent = velosipedTezligi();

  function moshinaTezligi(elInputValue, moshina) {
    var moshina = 70;
    var elInputValue = +elInput.value;
    return (elInputValue / moshina).toFixed(1) + " Soat";
  }
  elText3.textContent = moshinaTezligi();

  function samalyotTezligi(elInputValue, samalyot) {
    var samalyot = 800;
    var elInputValue = +elInput.value;
    return (elInputValue / samalyot).toFixed(1) + " Soat";
  }
  elText4.textContent = samalyotTezligi();
 })
