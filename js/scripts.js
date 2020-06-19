function Pizza() {
  this.pizzaOrder = [];
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza, pie) {

  pizza.pizzaOrder.forEach(function(element){
    let pieSize = pizza.pizzaOrder[0].size;
    let numOfTopping = pizza.pizzaOrder[0].topping["length"];
    let = costOfSize= 0;
    
    if (pieSize === "small") {
      costOfSize = 10;
    } else if (pieSize === "medium"){
      costOfSize = 12;
    } else if (pieSize === "large"){
      costOfSize = 14;
    } else {
      costOfSize = 16;
    }
    let totalCost = costOfSize + parseInt(numOfTopping)
    
    console.log(totalCost)
    // totalCost.push
  });

  // totalCost = sizeCost + (numOftopping * 2)
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}


// User interface
$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza();
    const inputSize = $("#size").val();
    let inputTopping =$("input:checkbox[name=topping]:checked")
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
    pizza.cost(pizza, pie);
  });
});