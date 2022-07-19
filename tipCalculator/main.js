document.forms.tip.addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = this.elements.amount.value;
  const guess = this.elements.guess.value;
  const count = this.elements.count.value;

  let result = (amount * count) / guess;
  this.elements.result.innerHTML = `tip ${result} each person`;
});
