//This is the delivery method choice part

var firstName = document.getElementById("nameValue").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var total;
const deliver= function(){
    if((document.querySelector("#submitBtn").clicked) && (document.querySelector("#nameValue").value=="" || document.querySelector("#nameValue").value==" " )){
        alert("Please enter your name!");
    }
    else if(document.querySelector("#submitBtn").clicked && document.querySelector("#phoneNumber").value==""){
        alert(`${firstName} please enter your phone number!`);
    }
    else if(document.querySelector("#delivery").checked){
        document.querySelector("#mahali").disabled==false;
        alert(`${firstName}`);


    }
    else if(document.querySelector("collect").checked){
        document.querySelector("#mahali").disabled==true;
        alert(`${firstName}`);
    }
}
deliver();
//pizza size checkbox choosing function
function pizzaSize(checkbox){
    var sizeChoice =document.getElementsByName('size');
    sizeChoice.forEach((box)=> {
        if (box !== checkbox){
            box.checked = false;
        }
    })
}
//pizza crust type choosing function
function crustType(checkbox){
    var crustChoice = document.getElementsByName("pizzaSize");
    crustChoice.forEach((box)=>{
        if(box!==checkbox){
            box.checked = false;
        }
    })
}


