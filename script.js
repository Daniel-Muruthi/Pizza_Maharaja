//This is the delivery method choice part

let deliver= function(){
    if($("#delivery").checked){
        $("#mahali").disabled==false;
        if($("#mahali").textcontent==""){
            alert("Enter Location");
        }
    }
    else if($("#collect").checked){
        $("#mahali").disabled==true;
    }
}
deliver();