function Pizza() {
  this.pizzaOrder = [];
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza, pie) {
  let small = 10;
  let medium = 12;
  let large = 14;
  let xlarge = 16;
  let topping = 2;

  pizza.pizzaOrder.forEach(function(element){
    let sizeCost = pizza.pizzaOrder[0].size;
      
      console.log(sizeCost)

      numOfTopping = pizza.pizzaOrder[0].topping["length"]
      console.log(numOfTopping)
  });
  // totalCost = sizeCost + (numOftopping * 2)
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}
let pizza = new Pizza();

// User interface
$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    event.preventDefault();
    let pizza = new Pizza();
    const inputSize = $("#size").val();
    console.log(inputSize)
    let inputTopping =$("input:checkbox[name=topping]:checked")
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
    console.log(pizza)
    pizza.cost(pizza, pie);
  });
});