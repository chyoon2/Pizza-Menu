function Pizza() {
  this.pizzaOrder = [];
  this.priceOfAll=[]
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza, pie) {
  // pizza.pizzaOrder.forEach(function(){
  let pieSize = pizza.pizzaOrder[0].size;
  let numOfTopping = pizza.pizzaOrder[0].topping["length"];
  let costOfSize = 0;
  
  if (pieSize === "Small") {
    costOfSize = 10;
  } else if (pieSize === "Medium"){
    costOfSize = 12;
  } else if (pieSize === "Large"){
    costOfSize = 14;
  } else if (pieSize === "Xlarge") {
    costOfSize = 16;
  } else {}
  
  const sum = costOfSize + parseInt(numOfTopping);
  pizza.priceOfAll.push(sum)
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}
// User interface

function displayCost (pizza) {
  let finalTotal = pizza.priceOfAll.reduce((a, b) => a + b, 0)
  let displayPrice = $("#subtotal");
  $("#outcome").show();
  (displayPrice).text(` $${finalTotal}`);
}

$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza();
    const inputSize = $("#size").val();
    let inputTopping =$("input:checkbox[name=topping]:checked")
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
    totalCost =pizza.cost(pizza, pie);
    displayCost(pizza);
  });
});
