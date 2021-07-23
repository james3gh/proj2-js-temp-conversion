temp1 = document.querySelector("#temp1");
temp2 = document.querySelector("#temp2");
// console.log(temp1.value)
temp1.addEventListener("input",function(){
    if(this.value == "")
    temp2.value = "";
    else{
    var conversion = (this.value)*1.8 + 32;
    temp2.value = conversion;
    }
})
temp2.addEventListener("input",function(){
    if(this.value == "")
    temp1.value = "";
    else{
    var conversion = (this.value - 32)*5/9;
    temp1.value = conversion;
    }
})
