
var cartitems=JSON.parse(localStorage.getItem("cartpage"))||[];

 var length=document.getElementById("cartdone");
      length.textContent=cartitems.length;

var suggest= [
    {
        image:"https://cdn.shopify.com/s/files/1/0015/2879/1092/products/2_63b00747-85ae-4536-af86-67d1ba35c917_1024x.png?v=1625640965",
        name:"Safety Goggles Polycarbonate Reuseable Anti-Fog Specs Shield",
        price2:"990",
        price:"490",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0015/2879/1092/products/anti-fogTileimage_1024x.jpg?v=1603272069",
        name:"Specsmakers Anti-Fog Cloth",
        price2:"2590",
        price:"749",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_8dcc7420-37eb-4d77-99f7-29bd809b4ddc_1024x.png?v=1625103736",
        name:"Eyewear Cleaning Kit (Anti-Fog Cloth 1pc, Cleaning Solution 2pcs, Selvyt Cloth 2pcs)",
        price2:"990",
        price:"490",
    },
];


var totalmoney=0;
 var s = "₹"
 

if(cartitems.length==0){
  console.log("here");
    window.location.href="../emptycart.html";
 }

let items=document.getElementById("items")
display(cartitems);
function display(cartitems){

cartitems.map(function(elem,index){
   
  var imgdiv=document.createElement("div");
  var textdiv=document.createElement("div");
  let div=document.createElement("div");
 let img = document.createElement("img");
 img.src=elem.image_url;
 let h1=document.createElement("h2");
 h1.textContent=`SpecsmakersFD11E HAPPSTER Unisex Eyeglasses ${elem.hashtagList[1].name} Hexagon ${elem.size} ${elem.totalNoOfRatings} Ultem ${elem.model_name}`;
 let price=document.createElement("h2");
 price.textContent=`${s}`+elem.prices[0].price;
 let quantitydiv = document.createElement("div");
  let quantity = document.createElement("h4");
  quantity.textContent="Quantity"
  let element = document.createElement("div");
  let decrease = document.createElement("p");
  decrease.textContent="-";
  
  decrease.addEventListener("click",function(){
      console.log("here")

      if(elem.count==1){
         deletes(index);
         
      }

      else{
          elem.count=elem.count-1;
          localStorage.setItem("cartpage",JSON.stringify(cartitems));
     
        quan.textContent=elem.count;
        var total = document.getElementById("total");
        prices(cartitems);
   
      }    
  })
  let increase = document.createElement("p");
  increase.textContent="+";
  increase.addEventListener("click",function(){
      console.log("here")
        elem.count=elem.count+1;
        console.log(elem.count);
        quan.textContent=elem.count;
        var total = document.getElementById("total");
        prices(cartitems);
        localStorage.setItem("cartpage",JSON.stringify(cartitems));
  })
  let quan = document.createElement("p");
  quan.textContent=elem.count;

  element.append(decrease,quan,increase);
  let del = document.createElement("h4");
  del.textContent="Remove";
  del.addEventListener("click",function(){
       deletes(index);
      console.log("here");
  })
  quantitydiv.append(quantity,element,del,price);


imgdiv.append(img);
textdiv.append(h1,quantitydiv);
div.append(imgdiv,textdiv);
items.append(div);

var total = document.getElementById("total");
total.textContent=`Your Cart :  ${s}`+totalmoney;
var money = document.getElementById("money");
money.textContent= `${s}`+totalmoney;
})
}


function deletes(index){  
cartitems.splice(index,1);
localStorage.setItem("cartpage",JSON.stringify(cartitems));
length.textContent=cartitems.length;
items.innerHTML="";
display(cartitems);
prices(cartitems);
}

var sugg=document.getElementById("suggest");
appended(suggest);

function appended(suggestion){
  suggestion.map(function(elem){
      let div=document.createElement("div");
      let pricediv=document.createElement("div");
      let img = document.createElement("img");
      img.src=elem.image;
      let name = document.createElement("h3");
      name.textContent=elem.name;
      let price1=document.createElement("h2");
      price1.textContent=`${s}`+elem.price;
      let price2 = document.createElement("h2");
      price2.textContent=`${s}`+elem.price2;
      pricediv.append(price1,price2);
       div.append(img,name,pricediv);
       div.addEventListener("click",function(){
           localStorage.setItem("Gotocart",JSON.stringify(elem));
           window.location.href="cart.html";
       })
       sugg.append(div);
  })
}

displayflex(suggest);

function displayflex(suggest){
    suggest.map(function(elem){
        var main= document.getElementById("sug_img");
     let div= document.createElement("div");
     let imgdiv=document.createElement("div");
     let textdiv=document.createElement("div");
     let img = document.createElement("img");
     img.src=elem.image;
     let h2 = document.createElement("h2");
     h2.textContent=elem.name;
     let price = document.createElement("h2");
     price.textContent=`${s}`+elem.price;
     imgdiv.append(img);
     textdiv.append(h2,price);
     div.append(imgdiv,textdiv);
     main.append(div);
    })
}
document.getElementById("clear").addEventListener("click",function(){
  console.log("here");
  cartitems.splice(0,cartitems.length)
  localStorage.setItem("cartpage",JSON.stringify(cartitems));
  length.textContent=cartitems.length;

})

function prices(cartitems){
totalmoney=0;
cartitems.map(function(elem){
totalmoney+=Number(elem.count)*Number(elem.prices[0].price);
})
total.textContent=`Your Cart :  ${s}`+totalmoney;
var money = document.getElementById("money");
    money.textContent= `${s}`+totalmoney;

}
prices(cartitems);
total.textContent=`Your Cart :  ${s}`+totalmoney;



document.getElementById("gift_button").addEventListener("click",function(){
window.location.href="../index.html"
})
document.getElementById("checkout_button").addEventListener("click",function(){
window.location.href="../payments/address.html"
})
document.getElementById("pincode_button").addEventListener("click",function(){
window.location.href="../payments/address.html"
})
document.getElementById("coupon").addEventListener("click",function(){
var disc = document.getElementById("discount").value;
if(disc=="MASAI"){
  alert("Succefully You Get 30% Off")
    let discount = ((totalmoney)/100)*30;
     totalmoney=totalmoney-discount;
    total.textContent=`Your Cart :  ${s}`+totalmoney;
  var money = document.getElementById("money");
    money.textContent= `${s}`+totalmoney;
}
})