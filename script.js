//Initalize variables
const check=document.querySelector("#check-btn");
const clear=document.querySelector("#clear-btn");
const res=document.querySelector("#results-div");

check.onclick=checkNo;
clear.onclick=clearNo;
console.log("start");
//CHECK BUTTON
function checkNo(){
const inp=document.getElementById("user-input").value;
if (inp.length===0){
  alert("Please provide a phone number");
  return;
}

validate(inp);
}
//CLEAR
function clearNo(){
res.innerText="";
}
//VALIDATE
function validate(n){
  var phoneno = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/gm;
  if(n.match(phoneno))
        {
      res.innerText="Valid US number: "+n;
        }
        else
        {
          res.innerText="Invalid US number: "+n;
        }
}