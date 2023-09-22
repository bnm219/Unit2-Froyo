const order = prompt("Enter the flavors that you would like separated by commas: ");
let froyo = order.split(',');
const orderObj = {}
let vanillaCount=0;
let strawberryCount=0;
let coffeeCount=0;

//this is for the edge case, it is NOT a requierment
const noSpacesFlavors = froyo.map(flavor => {
    return flavor.trim()
});

froyo = noSpacesFlavors;

for (const flavor in froyo){
    if(froyo[flavor] === "vanilla"){
        vanillaCount += 1
    }
    else if(froyo[flavor] === "strawberry"){
        strawberryCount += 1
    }
    else if(froyo[flavor] === "coffee"){
        coffeeCount += 1
    }
}

orderObj.vanilla = vanillaCount;
orderObj.strawberry = strawberryCount;
orderObj.coffee = coffeeCount;

console.log("Order Up: ", orderObj);