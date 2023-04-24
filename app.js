// Javascript дээрээсээ доошоо ажилдаг
//хувьсагчийн утга анхандаа undefined байдаг

// mod(112); // Тухайн функцын дээрээс дуудаж болдог

//Expression бичиглэл
var module = function (number) {
  var a = 90;
  console.log("Exression function ажиллаа", number);
};

// Statement бичиглэл
function mod(number) {
  console.log("Exression function ажиллаа", number);
}

// module(-255); // Тухайн фунцын дээрээс нь дуудаж болохгүй

// Өгөгдлийн 2 төрөл байдаг
// 1. Primitive (дотроо ганц утга агуулдаг)
// 2. Object (Илүү олон утга агуулдаг {key:value})

// Object
var person = {
  name: "Tsogiinlovon Tsogtbaatar",
  job: "Software engineer",
  age: "25",
  // is_married: true,
  // wife_name: "Khasherdene Baasandorj",
  getName: function () {
    return this.name;
  },
}; //.getName() //IIFE;

// console.log("person.name::: ", person.getName());

// Утган хандалт болох заагч хандалт

//Value(Primitive) - Утган хандалт
// var a = 12;
// var b = a;
// b = 13;
// console.log("a=", a); // 12
// console.log("b=", b); // 13

//Reference (Oject,massive,Function) заалт
// Javascript has 3 data types that are passed by reference: Array , Function , and Object .
var p1 = {
  name: "notebook",
  price: "300$",
};

var p2 = p1;
console.log("p1::: ", p1); //  { name: 'notebook', price: '300$' }
console.log("p2::: ", p2); // { name: 'notebook', price: '300$' }

p2.price = "400$"; // both object's price changed

console.log("p1::: ", p1); //  { name: 'notebook', price: '400$' }
console.log("p2::: ", p2); // { name: 'notebook', price: '400$' }
