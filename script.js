function activate(){
    if(delivery.checked){
        document.getElementById("mahali").disabled=false;
    }
    else if(collect.checked){
        document.getElementById("mahali").value="CBD";
        document.getElementById("mahali").disabled=true;
    }
}
activate();



// Ensuring only one checkbox can be checked at a time for pizza size

function pizzaSize(checkbox){
    let sizePz = document.getElementsByName('size');
    sizePz.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    })
}

//Ensuring only one checkbox can be checked for crust type

function crustType(checkbox){
    let crustPz = document.getElementsByName('pizzaSize');
    crustPz.forEach((item) => {
        if(item !== checkbox) item.checked = false;
    })
}
//check which button has been checked
function boxChecker(){
    var totalAmount=0;
    //pizza size
    var small = document.getElementById("small");
    var medium = document.getElementById("medium");
    var large = document.getElementById("large");
    var xlarge = document.getElementById("xlarge");
    if(small.checked){
        totalAmount += 150;
    }
    else if(medium.checked){
        totalAmount += 400;
    }
    else if(large.checked){
        totalAmount += 600;
    }
    else if(xlarge.checked){
        totalAmount += 800;
    }

    //crust type
    var cheese =document.getElementById("cheese");
    var classic =document.getElementById("classic");
    var cripsy =document.getElementById("cripsy");
    var glutten =document.getElementById("glutten");
    var stuffed =document.getElementById("stuffed");
    var thin =document.getElementById("thin");
    if(cheese.checked){
        totalAmount += 200;
    }
    else if(classic.checked){
        totalAmount += 150;
    }
    else if(cripsy.checked){
        totalAmount += 125;
    }
    else if(glutten.checked){
        totalAmount += 80;
    }
    else if(stuffed.checked){
        totalAmount += 150;
    }
    else if(thin.checked){
        totalAmount += 100;
    }
    //toppings

    var bacon=document.getElementById("bacon");
    var blackOlives=document.getElementById("blackOlives");
    var extraCheese=document.getElementById("extraCheese");
    var pepper=document.getElementById("pepper");
    var mushroom=document.getElementById("mushroom");
    var onion=document.getElementById("onion");
    var pepperoni=document.getElementById("pepperoni");
    var pineapple=document.getElementById("pineapple");
    var sausage=document.getElementById("sausage");
    var spinach=document.getElementById("spinach");

    if(bacon.checked){
        totalAmount += 200;
    }
    if(blackOlives.checked){
        totalAmount += 100;
    }
    if(extraCheese.checked){
        totalAmount += 200;
    }
    if(pepper.checked){
        totalAmount += 100;
    }
    if(mushroom.checked){
        totalAmount += 150;
    }
    if(onion.checked){
        totalAmount += 100;
    }
    if(pepperoni.checked){
        totalAmount += 200;
    }
    if(pineapple.checked){
        totalAmount += 150;
    }
    if(sausage.checked){
        totalAmount += 150;
    }
    if(spinach.checked){
        totalAmount += 100;
    }
    let pizzaAmount = Number(document.querySelector("#pizzaCount").value);

    var receipt=(totalAmount * pizzaAmount);
    document.querySelector("#charges").textContent=receipt;
    
    

    //delivery code

    var phoneNumber=document.getElementById("phoneNumber").value;
    let delivery=document.getElementById("delivery");
    let collect=document.getElementById("collect");
    // let location=document.getElementById("mahali");
    //make input location key inactive for collect
    if(delivery.checked){
        document.getElementById("mahali").disabled=false;
    }
    else if(collect.checked){
    document.getElementById("mahali").value="CBD";
    document.getElementById("mahali").disabled=true;
    }

    //submit button

    //capturing the name value
    function getName(){
        var jina=document.getElementById("nameValue").value;
        return jina;
    }
    getName();
    function getPhone(){
        var phoneNumber=document.getElementById("phoneNumber").value;
        return phoneNumber;
    }
    getPhone();
    function getLocation(){
        let location=document.getElementById("mahali").value;
        return location;
    } 
    getLocation();

    Swal.fire({
        icon: 'info',
        title: `Hello ${getName()} 👋`,
        text:`Your pizza order has been made and will be delivered at ${getLocation()} within the hour! The total Amount is ${receipt} Ksh` ,
        button:'<a href="#menu">ok</a>'
    })

}
