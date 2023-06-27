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





// // closure hell
// function getRecipe(){
//     setTimeout(()=>{
//         const ids = [12,123,143,423];
//         console.log(ids)
//         setTimeout(id=>{
//             const author = {
//                 name:"tsogoo",
//                 id:id,
//             }
//             console.log(author)
//             setTimeout(author=>{
//                 const recipe = {
//                     name:"tsuivan",
//                     author:author
//                 }
//                 console.log(recipe)
//             },5000,author)

//         },3000,12)
//     },1500)
// }

// console.log('program started')
// getRecipe();

// Promise

// let p = new Promise((resolve, reject) => {
//   console.log("promise ajilj bn ....");
//   resolve(" h duusla");
//   reject(" h chadsangui");
// });

// p.then((result) => {
//   console.log("amjilttai", result);
// }).catch((err) => {
//   console.log("amjiltgui", err);
// });

// new Promise((resolve, reject) => {
//   console.log("promise ajilj bn ....");
//   resolve(" amjilttai h duusla");
//   reject("  h chadsangui");
// })
//   .then((result) => {
//     console.log("amjilttai", result);
//   })
//   .catch((err) => {
//     console.log("amjiltgui", err);
//   });

// let imageRecoginition = (imagePath) => {
//   return new Promise((resolve, reject) => {
//     console.log("promise running ...");
//     resolve("success");
//     reject("failed");
//   });
// };

// imageRecoginition("c:/cat.png")
//   .then((result) => console.log("amjilttai", result))
//   .catch((error) => console.log("error", error));



//promise ES6
const getRecipes = () =>{
  return new Promise((resolve,reject)=>{
    ids = [1,2,3,4,5]
    setTimeout(ids=>{
      resolve(ids)
    },1500,ids)
  })
}

const getAuthor=id=>{
  return new Promise((resolve,reject)=>{
    setTimeout(_id=>{
      resolve({id:_id,name:"tsuivan",author:"tsogiinloovon"})
    },3000,id)
  })
}


// // promise chain
// getRecipes()
// .then(result=>{
//   console.log('ids',ids)
//   return getAuthor(ids[0])
// })
// .then(result=>{
//     console.log('author:',result)
//   })
// .catch(error=>{
//   console.log(erro)
// })




//async await 2017 ES8
async function getInformaiton(){
  const ids = await getRecipes();
  console.log(ids)
  const author = await getAuthor(ids[0])
  console.log(author)
}

getInformaiton()
