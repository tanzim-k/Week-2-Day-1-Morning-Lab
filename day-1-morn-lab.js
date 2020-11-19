let grade = 30

if(grade >= 90){
    console.log("You got an A")
} else if (grade >= 80 && grade < 90){
    console.log("You got a B")
} else if (grade >= 70 && grade < 80 ){
    console.log("You got a C") 
} else if (grade >= 55 && grade < 70){
    console.log("You got a D")
} else{
    console.log("You got a F")
}


let hr = 18

if(hr >= 5 && hr < 12){
    console.log("Good Morning")
} else if(hr >= 12 && hr < 16){
    console.log("Good Afternoon")
} else if(hr >=16 && hr <= 24){
    console.log("Hey there")
}

const DATE = new Date();
let time = DATE.getHours();

if(time >= 5 && time < 12) {
    console.log("Good Morning");
} else if(time > 12 && time < 16)  {
    console.log("Good Afternoon");
} else {
    console.log("Hey There");
}

