
//Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

function iterate() {
    for (var i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzBuzz");

        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");

        } else {
            console.log(i);
        }

    }


}
iterate();

//2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function multiples() {
    let sum = 0;

    for (var i = 0; i < 1001; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;

            console.log(sum);

        }

    }

}
multiples();

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function checkValue() {
    for (var i = 0; i < 21; i++) {
        if (i % 2 === 0) {
            console.log(i + " number is even")
        }
        else {
            console.log(i + " number is odd");
        }
    }

}
checkValue();

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
function writeConditionalStatement() {

    let num = [-2, 4, -5, 6, 0]
    let largest = 0;
    for (let i = -1; i < num.length; i++) {
        if (num[i] > largest)
            largest = num[i];


    }
    console.log(largest);
}
writeConditionalStatement();

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

function largest() {
    let greatest = [10, 40];//40
    let large = 0;
    for (let i = 0; i < greatest.length; i++) {
        if (greatest[i] > large) {
            large = greatest[i];

        }
    }
    console.log(large);



}
largest();


//6. Write a JavaScript program to find leap years from 2000 to 2022

function findLeapYears() {
    for (var i =2000; i < 2023; i++) {
        if (i%4===0){
            console.log(i + " THis is a leap year" );

        }else{
            console.log( i +"This is not a leap year");
        }

    }

}
findLeapYears();
//function as values
// it has anonymous function- are function without a name

let a = function(){
    console.log("hello");
}
a();

//call back function
// let num = [1,2,3,4,5,6,7,8];
// let b =num.map (a=> x*2)
// let c =num.map (function(x) {
//      return x*2 })
//     console.log();

// let button = document.getElementById('button').addEventListener('click', function(e) {
//     this.innerText = "hello";
// });

//IIFES


(function (){
    console.log("IIFES");
})
()

//