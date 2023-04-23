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
  is_married: true,
  wife_name: "Khasherdene Baasandorj",
  getName: function () {
    return this.name;
  },
}; //.getName() //IIFE;

console.log("person.name::: ", person.getName());
