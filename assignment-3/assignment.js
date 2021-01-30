
//kilometerToMeter
function kilometerToMeter(kilometer){

var meter = kilometer*1000;
return meter;

}
var tenkm = kilometerToMeter(10);
console.log(tenkm)

//budgetCalculator
function budgetCalculator(watch, mobile, laptop){

    var price1 = watch * 50;
    var price2 = mobile * 100;
    var price3 = laptop * 500;

    var totalPrice = price1 + price2 + price3;
     return totalPrice;
} 

var all = budgetCalculator("4","8","2");
console.log(all);

//hotelCost

function hotelCost(dayes){
var vara = 0;
if (dayes<=10){
    vara = dayes * 100;
} 
else if (dayes<=20){
    var firstpart = 10*100;
    var remaining = dayes - 10;
    var secondpart = remaining * 80;
    vara = firstpart + secondpart;

}
else{
    var firstpart = 10 * 100;
    var secondpart = 10 * 80;
    var remaining = dayes-20;
    var thirdpart = remaining * 50;
    vara = firstpart + secondpart + thirdpart;
}
return vara

}
var count = hotelCost(25);
console.log(count);

//megaFriend
function megaFriend(arr){

    let longestWord = '';
    for(let i=0; i< arr.length; i++){
        if(longestWord.length < arr[i].length){
            longestWord = arr[i]
        }
    }
    return longestWord


}
const result = megaFriend(['manik', 'opu', 'foysal', 'ahmed','bayazidul']);
console.log(result);
