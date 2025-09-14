const mybab = document.getElementById("mybab ")
let age = 0

if (age >=25 ){
    console.log("hallo")
}
else{
   console.log("kleine jongen")
   document.getElementById("mybab")
}
 

let randomNumber = Math.floor(Math.random() * 100);
let tryAmount = 0

console.log(randomNumber);
function guess() {
   
   const input =document.getElementById("input")
}

let userGuess = parseInt(input.value);


function guess(){
   const poging = document.getElementById("try")
   const input = document.getElementById("input")

   if (Number(input.value) === randomNumber){
      alert("Klopt")
      reset
   }else if (Number(input.value) > randomNumber){
      alert("Het getal is lager!")
      tryAmount += 1
      poging.innerHTML = "Aantal pogingen: " + tryAmount
   }else if (Number(input.value) < randomNumber){
      alert("Het getal is hoger!")
      tryAmount += 1
      poging.innerHTML = "Aantal pogingen: " + tryAmount
   }
}

function reset(){
   const input = document.getElementById("input")
   const poging = document.getElementById("try")

   input.value = ""
   randomNumber = Math.floor(Math.random() * 10);
   tryAmount = 0
   poging.innerHTML = "Aantal pogingen: " + tryAmount
}
