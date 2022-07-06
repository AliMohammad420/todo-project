/////Phase1
var userConfirm = confirm("Do you want to skip the message!")
if(userConfirm == false)
alert("Welcome!")


var userName = prompt("What's your name?")
console.log("User name is ",userName)

var gender = prompt('are you male or female')
if (gender == 'male') {
 alert(sayhello(" Mr ", userName))
} else if (gender == 'female') {
  alert(sayhello(" Ms ", userName))
}else{
  alert("Invalid gender")
}

function sayhello(gender, name) {
    return ('hello' + gender + name + ' how are you today?')
}

var age = prompt("What's your age?")
if (age <= 0){
    alert("Invalid age")
}
//////phase2
var q1 = prompt('Do you play videogames?(yes/no)')
if(q1 === null || q1 === '')
{
    alert("Invalid");
}
var q2 = prompt("Do you study?(yes/no)")
if(q2 === null || q2 === '')
{
    alert("Invalid");
}
var q3 = prompt("Do you drive?(yes/no)")

if(q3 === null || q3 === '')
{
    alert("Invalid");
}
var arr=[];
for(let i = 0; i < 8 ;i++){
  arr.push(userConfirm, userName, gender, q1, q2, q3);
}
console.log(arr);