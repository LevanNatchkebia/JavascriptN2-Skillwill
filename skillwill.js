////// Excercise 1 

let users = [{name:'Temo', age: 25},
            {name: 'Lasha', age: 21},
            {name: 'Ana', age: 28}];

function detectYoungest (users) {
  let youngAge = parseInt(users[0].age);

for (let i=0; i < users.length; i++) {
  let currentAge = parseInt(users[i].age);
  if (currentAge < youngAge) {
    youngAge = currentAge;
    youngAge = users[i].name;
  }
}

return youngAge;
}

console.log (detectYoungest(users));

//////// Excercise 2


function sameInfo(user){
  return {...user};
}
let user = {name: 'Levan', age: 23, city: 'Tbilisi',};
let user1 = sameInfo (user);

console.log (user);
console.log (user1);
console.log (user===user1);



///////// Excercise 3

function rollRandomDice() {
  return parseInt(Math.random() * 10) + 1
}

let scoreA = 0;
let scoreB = 0;

while (scoreA !== 3 && scoreB !== 3) {
  let userA = rollRandomDice();
  console.log ("User A rolled " + userA);
  
  if (userA == 3) {
    console.log("User A is winner");
    break;
  } else {
    scoreA+=2;
  }

  let userB = rollRandomDice();
  console.log("User B roller " + userB);

  if (userB == 3) {
    console.log("User B is winner");
    break;
  } else {
    scoreB+=2;
  }

}