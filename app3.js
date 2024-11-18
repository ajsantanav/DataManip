let score = 60;

function grades(score) {
    if (score >= 90) {
        console.log("Grade: A");
    }
    else if (score >= 80) {
        console.log("Grade: B");
    }
    else if(score >= 70) {
        console.log("Grade: C") 
    }
    else if(score >= 55) {
        console.log("Grade: D")
    }
    else {
        console.log("Grade: F");
    }
}

let num = 5;

if(num > 0 && num > 100)
{
    console.log("Number is greater than 0 and 100");
}
else {
    console.log("Number is greater than 0, but less than 100");
}
