
function Pizza() {
  this.pizzaOrder = [];
  this.price = 0;
}

Pizza.prototype.addInfo= function(pie) {
  this.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza, pie) {

  // pizza.pizzaOrder.forEach(function(element){
    for(index=0; index <= 2; index++) {
    let pieSize = pizza.pizzaOrder[0].size;
    // let numOfTopping = pizza.pizzaOrder[0].pie[topping]["length"];
    // let = costOfSize = 0;
    // console.log(pieSize)
    // if (pieSize === "small") {
    //   costOfSize = 10;
    // } else if (pieSize === "medium"){
    //   costOfSize = 12;
    // } else if (pieSize === "large"){
    //   costOfSize = 14;
    // } else {
    //   costOfSize = 16;
    // }
    // let totalCost = costOfSize + parseInt(numOfTopping)
    
    // let sum = pizza.price + totalCost;
    // console.log(sum)
  }
  // });

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

    const inputSize = $("#size").val();
    let inputTopping =$("input:checkbox[name=topping]:checked")
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
    pizza.cost(pizza, pie);
    // displayCost();
  });
});