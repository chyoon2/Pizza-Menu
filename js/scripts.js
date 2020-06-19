// Pizza backend logic

function Pizza() {
  this.pizzaOrder = [];
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}

Pizza.prototype.cost = function (pizza) {
  let small = 10;
  let medium = 12;
  let large = 14;
  let xlarge = 16;

  let topping = 2;

  pizzaOrder.forEach(function(numOfPizza){
    Pizza.pizzaOrder[numOfPizza].forEach(function(desc) {
      sizeCost = Pizza.pizzaOrder[numOfPizza].size[desc];
      console.log(sizeCost)
      numOfTopping = Pizza.pizzaOrder[numOfPizza].topping["length"];
      console.log(pizzaOrder)
    });
  });
  totalCost = sizeCost + (numOftopping * 2)
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

  });
});