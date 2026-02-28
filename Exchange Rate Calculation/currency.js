class Currency {
  constructor() {
    this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=yourapikey";
  }

  async exchange(amount, firstCurrent, secondCurrent) {
    const response = await (await fetch(`${this.url}${firstCurrent}`)).json();
    const result = (amount * response.data[secondCurrent]).toFixed(2);
    return result;
  }
}
