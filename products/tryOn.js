 
    let arr=JSON.parse(localStorage.getItem("glass"));
    let image_url = "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/HomeTry-Oninnerbanner2Mask_1024x.jpg?v=1627045186"
    // console.log("arr",arr[0])
    // console.log("cart",cartitems)
    let url = "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/HomeTry-OninnerbannerMask_1000x.jpg?v=1627045186"
    displayglass(arr);
    function displayglass(arr){
      let pic = document.createElement("img")
      pic.src=image_url;
      document.getElementById("oneimgdiv").append(pic);
  
      let div = document.createElement("div");
      let pic1 = document.createElement("img");
      pic1.src =image_url;
      let pic2 = document.createElement("img")
      pic2.src = url; 
      let pic3 = document.createElement("img")
      pic3.src = image_url; 

      pic1.addEventListener("click",function(){
        pic.src = arr[0].hover_image_url;
      })
      pic2.addEventListener("click", function(){
        pic.src = arr[0].image_url;
      })
      pic3.addEventListener("click", function(){
        pic.src = arr[0].hover_image_url;
      })
      div.append(pic1,pic2)
      document.getElementById("threeimgdiv").append(div);


      let maindiv = document.createElement("div");

      let textdiv = document.createElement("div");
      textdiv.setAttribute("id","toptextdivflex");
      let h1tag = document.createElement("h3")
      h1tag.innerHTML=`Home Eye Check-up & Try-On`;
      let skuname = document.createElement("h4")
      skuname.innerText=`SKU: `
      textdiv.append(h1tag,skuname);
  
      let totalname=document.createElement("h1")
      totalname.innerText=`Home Eye Check-up with Home Try-On. Available only in Chennai.`;
      totalname.setAttribute("id","totalglassname");

      let pricediv = document.createElement("div")
      pricediv.setAttribute("id","glassprice")
      let price = document.createElement("h3")
      price.innerHTML=`₹ 0`;
    
      price.style.color='red'
      price.style.fontSize='40px'
      let price1 = document.createElement("h3")
      price1.innerHTML = `₹299`
      price1.style.textDecoration="line-through"
      let pricetag = document.createElement("p")
      pricetag.innerText="(Including GST)";
      pricediv.append(price,price1,pricetag);
     
      let interestdiv1 = document.createElement("div");
      interestdiv1.setAttribute("id","fourinterest");
      let interestprice1=Math.floor((100/400)*arr[0].prices[0].price)
      let interest = document.createElement("p")
      interest.innerHTML=` `
      let interestimg =document.createElement("img")
      interestimg.src=""
      interestdiv1.append(interest,interestimg);
  
      let interestdiv2 = document.createElement("div");
      interestdiv2.setAttribute("id","threeinterest");
      let interestprice2=Math.floor((100/300)*arr[0].prices[0].price);
      let interest1 = document.createElement("p")
      interest1.innerHTML = ` Or pay later with `
     interest1.style.marginTop='20px'
      let interestimg1 = document.createElement("img")
      interestimg1.src="https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg";
      interestimg1.style.height='50px'
      interestimg1.style.width='85px'
      interestdiv2.append(interest1,interestimg1);
  
      

      let btncart = document.createElement("button");
      btncart.textContent="SCHEDULE YOUR TIME"
      btncart.setAttribute("id","btnpurchase");

      btncart.addEventListener("click",function(){
        let cartitems = JSON.parse(localStorage.getItem("cartpage")) || [];
        //cartitems.push(arr[0]);

        var count1=0;
        if(cartitems.length != 0){
          for(let i=0;i<cartitems.length;i++){
            if(arr[0].id == cartitems[i].id){
              cartitems[i].count++;
              count1++;
            }
          }
          if(count1 == 0){
            arr[0].count=1;
            cartitems.push(arr[0]);
          }
        }
        else{
          arr[0].count=1;
          cartitems.push(arr[0]);
        }
        localStorage.setItem("cartpage", JSON.stringify(cartitems))
      });


      let lastptag = document.createElement("p");
      lastptag.textContent="14 Days Return on all Eyeglasses & Sunglasses | Free Shipping | 1 year Unconditional Warranty"
      lastptag.style.textAlign="start";
      lastptag.style.marginTop="12px";

      maindiv.append(textdiv,totalname,pricediv,interestdiv1,interestdiv2,btncart,lastptag)
      document.getElementById("alltextdiv").append(maindiv);

      let modelno = document.createElement("div")
      modelno.textContent=arr[0].model_name;
      document.getElementById("modelnodiv").append(modelno);
  
      let frametyp = document.createElement("div")
      frametyp.textContent=arr[0].hashtagList[3].name;
      document.getElementById("frametypediv").append(frametyp);
  
      let framesiz = document.createElement("div")
      framesiz.textContent=arr[0].hashtagList[0].name;
      document.getElementById("framesizediv").append(framesiz);
  
    }
 
  
  