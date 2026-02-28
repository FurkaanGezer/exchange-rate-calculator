const firstInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const secondInput = document.querySelector("#result");

runEventListeners();

const currency = new Currency;

function runEventListeners(){
  firstInput.addEventListener("input",exchange);
}

function exchange(){
  const firstInputValue = Number(firstInput.value);
  const firstOptionValue = firstOption.value;
  const secondOptionValue = secondOption.value;
  
  currency.exchange(firstInputValue,firstOptionValue,secondOptionValue)
  .then((response) => {
    secondInput.value = response;
  })

}