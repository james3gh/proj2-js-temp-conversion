temp1 = document.querySelector("#temp1");
temp2 = document.querySelector("#temp2");
var t1,t2,conversion;
// console.log(temp1.value);
temp1.addEventListener("input",function(){
    if(this.value == "")
        temp2.value = "";
    else {
        if(t1 == "Celsius" && t2 == "Fahrenheit"){
            conversion = (this.value)*1.8 + 32;
            temp2.value = conversion;
        }
        else if(t1 == "Celsius" && t2 == "Kelvin"){
            conversion = Number(this.value) + 273.15;
            temp2.value = conversion;   
        }
        else if(t1 == "Kelvin" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 273.15)*9/5 + 32;
            temp2.value = conversion.toFixed(3);
        }
        else if(t1 == "Kelvin" && t2 == "Celsius"){
            conversion = Number(this.value) - 273.15;
            temp2.value = conversion;    
        }
        else if(t1 == "Fahrenheit" && t2 == "Celsius"){
            conversion = ((this.value) - 32)*5/9;
            temp2.value = conversion.toFixed(3);  
        }
        else if(t1 == "Fahrenheit" && t2 == "Kelvin"){
            conversion = ((this.value) - 32)*5/9 + 273.15;
            temp2.value = conversion.toFixed(3);
        }
    }
})
temp2.addEventListener("input",function(){
    // if(t1 == "Celsius" && t2 == "Fahrenheit"){
    //     if(this.value == "")
    //         temp1.value = "";
    //         else{
    //         var conversion = (this.value - 32)*5/9;
    //         temp1.value = conversion.toFixed(3);
    // }
    // }
    // else if(t1 == "Celsius" && t2 == "Kelvin"){
    //     if(this.value == "")
    //     temp1.value = "";
    //     else{
    //     var conversion = Number(this.value) - 273.15;
    //     temp1.value = conversion;
    //     }
    // }
    if(this.value == "")
        temp1.value = "";
    else {
        if(t1 == "Celsius" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 32)*5/9;
            temp1.value = conversion.toFixed(3);
        }
        else if(t1 == "Celsius" && t2 == "Kelvin"){
            conversion = Number(this.value) - 273.15;
            temp1.value = conversion;   
        }
        else if(t1 == "Kelvin" && t2 == "Fahrenheit"){
            conversion = ((this.value) - 32)*5/9 + 273.15;
            temp1.value = conversion.toFixed(3);
        }
        else if(t1 == "Kelvin" && t2 == "Celsius"){
            conversion = Number(this.value) + 273.15;
            temp1.value = conversion;    
        }
        else if(t1 == "Fahrenheit" && t2 == "Celsius"){
            conversion = (this.value)*1.8 + 32;
            temp1.value = conversion;
        }
        else if(t1 == "Fahrenheit" && t2 == "Kelvin"){
            conversion = ((this.value) - 273.15)*9/5 + 32;
            temp1.value = conversion.toFixed(3);  
        }
    }
})

//////////////////////////////////////////////////////////
disp();
function disp(){
t1 = document.getElementById("dropdown1").value;
// console.log(t1);
t2 = document.getElementById("dropdown2").value;
// console.log(t2);
// if(t2 == "Kelvin")
//     temp2.value = "273.15";
// else if(t1 == "Kelvin")
//     temp1.value = "273.15";
// else if(t1 == "Celsius")
//     temp1.value = 0;
// else if(t2 == "Celsius")
//     temp2.value = "0";
// else if(t1 == "Fahrenheit")
//     temp1.value = "32";
// else if(t2 == "Fahrenheit")
//     temp2.value = "32";
 }
// var c1 = document.querySelector("#dropdown1 .C");
// var f1 = document.querySelector("#dropdown1 .F");
// var k1 = document.querySelector("#dropdown1 .K");
// var c2 = document.querySelector("#dropdown2 .C");
// var f2 = document.querySelector("#dropdown2 .F");
// var k2 = document.querySelector("#dropdown2 .K");

 
//     if(t1 === "Celsius"){
//         if(t2 === "Celsius")
//         f1.selected = "true";
//     }
// }
