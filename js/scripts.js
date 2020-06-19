function Pizza() {
  this.pizzaOrder = [];
}

Pizza.prototype.addInfo= function(pie) {
  pizzaOrder.push(pie);
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}

Pizza.prototype.cost = function (pizza) {
  let small = 10;
  let medium = 13;
  let large = 16;
  let xlarge = 19;

  let topping = 1;

  pizzaOrder.forEach(function(numOfPizza){
    Pizza.pizzaOrder[numOfPizza].forEach(function(desc) {
      sizeCost = Pizza.pizzaOrder.[numOfPizza].size[desc];
      console.log(sizeCost)
      toppingCost = Pizza.pizzaOrder.[numOfPizza].topping[desc];
    });
    
  });
}

$(document).ready(function() {
  let pizza = new Pizza();
  let pie = new Pie();

});