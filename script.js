
//update rate value in span
function updateRate() 
{
    var rateval = document.getElementById("rate").value + "%";
    document.getElementById("rate_val").innerText=rateval;
}

// function to calculate simple interest
function compute(){
    var principal = document.getElementById("principal").value;
   if(parseInt(principal) <= 0 || principal.length <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    
    }else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(interest);

      document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+ amount +"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"; 
   }
} 
