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
    var pzOrder= String("");
    var crOrder=String("");
    var tpOrder=String("")
    if(small.checked){
        pzOrder="Small";
        totalAmount += 150;
    }
    else if(medium.checked){
        pzOrder="Medium";
        totalAmount += 400;
    }
    else if(large.checked){
        pzOrder="Large";
        totalAmount += 600;
    }
    else if(xlarge.checked){
        pzOrder="Extra Large";
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
        crOrder="Cheese Crust";
        totalAmount += 200;
    }
    else if(classic.checked){
        crOrder="Classic Crust";
        totalAmount += 150;
    }
    else if(cripsy.checked){
        crOrder="Crispy Crust";
        totalAmount += 125;
    }
    else if(glutten.checked){
        crOrder="Glutten-Free Crust";
        totalAmount += 80;
    }
    else if(stuffed.checked){
        crOrder="Stuffed Crust";
        totalAmount += 150;
    }
    else if(thin.checked){
        crOrder="Thin Crust";
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
        tpOrder +=", Bacon ";
        totalAmount += 200;
    }
    if(blackOlives.checked){
        tpOrder +=", Black Olives ";
        totalAmount += 100;
    }
    if(extraCheese.checked){
        tpOrder +=", Extra Cheese";
        totalAmount += 200;
    }
    if(pepper.checked){
        tpOrder+=", Green Peppers ";
        totalAmount += 100;
    }
    if(mushroom.checked){
        tpOrder +=", Mushroom ";
        totalAmount += 150;
    }
    if(onion.checked){
        tpOrder+=", Onions ";
        totalAmount += 100;
    }
    if(pepperoni.checked){
        tpOrder+=", Pepperoni ";
        totalAmount += 200;
    }
    if(pineapple.checked){
        tpOrder+=", Pineapple ";
        totalAmount += 150;
    }
    if(sausage.checked){
        tpOrder+=", Sausage ";
        totalAmount += 150;
    }
    if(spinach.checked){
        tpOrder=" Spinach";
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

    if((getName())=="" || (getName())==" "){
        alert(`Please enter your name`);
        document.querySelector("#nameValue").style.border="4px solid red";
    }
    else if((getPhone())=="" || (getPhone())==" "){
        alert(`Please enter your phoneNumber`);
        document.querySelector("#phoneNumber").style.border="4px solid red";
    }
    else if((getLocation())=="" || (getLocation())==" "){
        alert(`Please choose a delivery mode to enter a location`);
        document.querySelector("#mahali").style.border="4px solid red";
    }
    else{
        Swal.fire({
            icon: 'info',
            title: `Hello ${getName()} 👋`,
            text:`Your pizza order (${pzOrder}, ${crOrder} topped with ${tpOrder}) has been made. The Order will be delivered at ${getLocation()} within the hour! The total Amount is ${receipt} Ksh` ,
            button:'<a href="#menu">ok</a>'
        })

    }
}




function calc(){
    //check which button has been checked
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

    Swal.fire({
        icon: 'info',
        title: `Hello 👋`,
        text:`The total Amount for your pizza order is ${receipt} Ksh. Please add your delivery details below` ,
        button:'<a href="#menu">ok</a>'
    })
       
}