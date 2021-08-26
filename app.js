var dateOfBirth=document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var checkButton=document.querySelector("#check-button");
var outputBox=document.querySelector(".output-box")

//You can also sum the digits using while loop using modulus
// Extra:Read about how to traverse index and values using in and of in for loop.


function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText="your Birthday is Lucky🤩"
        }else{
        outputBox.innerText="Your Birthday is not lucky 😬 "
        }
}

function checkIfBirthdayLucky(){
    //we are calling both the functions from here
    var dob=dateOfBirth.value;
    var sum=calculateSumOfDigitsofdate(dob)
    if(sum&&dob)
    compareValues(sum,luckyNumber.value);
    else{
        outputBox.innerText="Enter both values 🙄";
    }
}

function calculateSumOfDigitsofdate(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum= sum + Number(dob.charAt(i));
    }
    return sum;
}


checkButton.addEventListener("click",checkIfBirthdayLucky)