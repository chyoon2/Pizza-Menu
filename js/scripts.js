function Pizza() {
  this.pizzaOrder = [];
  this.priceOfAll=[]
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza) {

  for (const property in pizza.pizzaOrder) {
    const pieSize = pizza.pizzaOrder[property].size;
    const numOfTopping = pizza.pizzaOrder[property].topping["length"];
    console.log(property)
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
}

function Pie(size, topping) {
  this.size = size;
  this.topping = topping; 
}

function displayCost (pizza) {
  let finalTotal = pizza.priceOfAll.reduce((a, b) => a + b, 0)
  console.log(finalTotal)
  let displayPrice = $("#subtotal");
  $("#outcome").show();
  (displayPrice).text(` $${finalTotal}`);
}

$(document).ready(function() {
  
  let pizza = new Pizza();

  $("form#form-one").submit(function(event) {
    event.preventDefault();
    const inputSize = $("#size").val();
    let inputTopping =$("input:checkbox[name=topping]:checked")
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
  });

  $("button#price-button").click(function(){
    totalCost =pizza.cost(pizza);
    displayCost(pizza);
  });
});
