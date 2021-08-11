var readlineSync = require("readline-sync");

var userName = readlineSync.question("Enter your User Name : ");

console.log("Welcome "+userName+". Let's check how much you know about GOT. ");

while(true)
{

var response = readlineSync.question("Are you Ready? Y/N : ");


if(response.toUpperCase() === "Y" || response.toUpperCase() === "YES")
{
   break;

}
else if(response.toUpperCase()=== "N" || response.toUpperCase() === "NO")
{
  console.log("Okay, then Press Y whenever you will be ready...");
  continue;
}
else 
{
  console.log("Please enter valid response.");
  continue;
}

}

console.log("Let's Go!!! ");
var score = 0;

function play(quest,options,answer)
{
   console.log(quest);

   for(var op=0;op<options.length;op++)
   {
     console.log(options[op]);
   }

   var ans = readlineSync.question("Enter your Option : a/b/c/d only : ");

   if(ans.toLowerCase() === answer)
   {
      score = score + 1;
      console.log("You are right!!");
   }
   else
   {
     console.log("Wrong answer.");
     console.log("Correct answer is : "+answer);
   }

   console.log("------------------------");

}

var questions = [{

  question : "1. What is the Iron Bank’s representative, played by Mark Gatiss, called?",

  answer : "d",

  options : ["a. Quorin Halfhand", "b. Xaro Xhoan Daxon","c. Howard from the Halifax","d. Tycho Nestoris"]
 
  

},
{
  question : "2. Who was responsible for the creation of the Night King?",

answer : "b",

  options : ["a. The Lord of Light", "b. The Children of the Forest","c. The Drowned God","d. The First Men"]
 
  

},
{
  
  question : "3. In the TV show, what was Hodor called before he got his tragic door-holding nickname?",

  answer : "a",

  options : ["a. Wylis", "b. Horys","c. Myrys","d. Gladys"]
 
  
},
{
  question : "4. Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?",

  answer : "b",

  options : ["a. Wes Borland", "b. Harry Strickland","c. Kiefer Sutherland","d. Robert Westland"]
 
  

},
{
  question : "5. Dany’s dragons are (or were) called Drogon, Viserion and ____?",

   answer : "c",

  options : ["a. Dougal", "b. Vhagar","c. Rhaegal","d. Balerion"]
 
 

},
{
  question : "6. Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?",

   answer : "a",

  options : ["a. Jon Snow", "b. Gendry","c. Podrick Payne","d. Robb Stark"]
 
 

},
{
  question : "7. Who said: 'I don’t plan on knitting by the fire while men fight for me'?",

  answer : "a",

  options : ["a. Lyanna Mormont", "b. Sansa Stark","c. Ser Brienne of Tarth","d. Olenna Tyrell"]
 
  

},
{
  question : "8. Who’s this grizzled chap with Ser Jorah and Daenerys?",

  
  answer : "d",

  options : ["a. Ser Elrick Sarsfield", "b. Ser Balon Swann","c. Ser Royland Degore","d. Ser Barristan Selmy"]

},
{
  question : "9. What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?",

   answer : "c",

  options : ["a. Millipede", "b. The You’re Making Me Very Cross(bow)","c. Scorpion","d. Mantis"]
 
 

},
{
  question : "10. Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands?",

   answer : "a",

  options : ["a. His brother", "b. His uncle","c. His nephew","d. His cousin"]
 
 

}];


for(var i =0;i<questions.length;i++)
{
   
   console.log();

   play(questions[i].question,questions[i].options,questions[i].answer);

}


if(score >= 4)
{

  console.log("YAY!!! Your Score : "+score);

}
else
{
  console.log("Your Score : "+ score);
}



