//     function addition(a,b){
//         return a + b;
//     }

//     console.log(addition(2,6));

// //------------------------------


// function introduce(){
//     console.log("Nice to meet you");
// }

// function personNotFound(){
//     console.log("Person not found")
// }

// function findPerson(intro){
//     console.log("Spotted a person!")
//     intro();
// }

// //findPerson(introduce);
// findPerson(personNotFound)

// //another way

// const aboutMe = function(me){
//     console.log("My hobby is", me.hobby);
// }

// let me = {
//     name:"albert",
//     hobby:"Volleyball"
// };

// aboutMe(me);

// //---------------------
// //Small exercice
// let calling = () => {
//     console.log("RING RING!!");
// };
// let callingLater = (call) => {
//     call();
// };
// callingLater(calling);

let sum = (a,b) => {
    console.log(a + b);
}
sum(3,5);
