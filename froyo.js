const order = prompt("Enter the flavors that you would like separated by commas: ");
let froyo = order.split(',');
const orderObj = {};

//this is for the edge case, it is NOT a requierment
const noSpacesFlavors = froyo.map(flavor => {
    return flavor.trim()
});

froyo = noSpacesFlavors;

for (const flavor of froyo){
    if(orderObj[flavor]){
        orderObj[flavor] += 1;
    } else {
        orderObj[flavor] = 1;
    }
};

console.log("Order Up: ", orderObj);