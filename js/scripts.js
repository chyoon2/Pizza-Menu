// Pizza backend logic

function Pizza() {
  this.pizzaOrder = [];
}

Pizza.prototype.addInfo= function(pizza, pie) {
  Pizza.pizzaOrder.push(pie);
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
  let pizza = new Pizza();
  
  $("form#form-one").submit(function(event) {
    event.preventDefault();

    const inputSize = $("#size").val();
    console.log(inputSize)
    const inputTopping= $("input:checkbox[name=work-transportation]:checked");
    
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pie);

  });
});