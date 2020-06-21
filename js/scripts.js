// Backend Logic
function Pizza() {
  this.pizzaOrder = [];
  this.priceOfAll=[]
}

Pizza.prototype.addInfo= function(pizza, pie) {
  pizza.pizzaOrder.push(pie);
}

Pizza.prototype.cost = function (pizza) {

  for (const element in pizza.pizzaOrder) {
    const pieSize = pizza.pizzaOrder[element].size;
    const numOfTopping = pizza.pizzaOrder[element].topping["length"];
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
  let displayPrice = $("#subtotal");
  $("#outcome").show();
  (displayPrice).text(` $${finalTotal}`);
}

// UserInterface

$(document).ready(function() {
  let pizza = new Pizza();

  $("form#form-one").submit(function(event) {
    event.preventDefault();
    const inputSize = $("#size").val();
    let inputTopping =$("input:checkbox[name=topping]:checked")
    console.log(inputTopping)
    let pie = new Pie(inputSize, inputTopping);
    pizza.addInfo(pizza, pie);
  });

  function showOrder(pizza) {
    let toppings = $("input:checkbox[name=topping]:checked")
console.dir(toppings)
    for(let num in pizza.pizzaOrder){
      let showy = pizza.pizzaOrder[num].size;
      $(".topping-form").append(parseInt([num]+ 1 ) + ". " + showy + " pie<br>");
    }
  }

  $("button#price-button").click(function(){
    totalCost =pizza.cost(pizza);
    displayCost(pizza);
    showOrder(pizza);
  });
});
