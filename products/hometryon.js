document.querySelector('.btn').addEventListener('click',signup)
    
var user=JSON.parse(localStorage.getItem('userData')) || [];

function signup(){
var name=document.querySelector('.name').value

var mobile=document.querySelector('.mobile').value
var add=document.querySelector('.add').value
var pin=document.querySelector('.pin').value
var city=document.querySelector('.city').value
var day=document.querySelector('.day').value
var time=document.querySelector('.time').value
if(name.length==0 ){
    alert('Enter your name')
    
}
else if(mobile.length==0 ){
  alert('Enter your mobile no.')
}
else if( add.length==0 ){
  alert('Enter your address')
}

else if( pin.length==0 ){
  alert('Enter your pincode')
}
 if(name.length!=0 && mobile.length!=0 &&add.length!=0 && pin.length!=0){
  alert("Register Successfully!!")
}
var obj={
    name:name,
    mobile:mobile,
    address:add,
    pincode:pin,
    City:city,
    Day:day,
    Time:time,
}
user.push(obj)
localStorage.setItem("userData", JSON.stringify(user));
console.log(user)
 

}
  
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}