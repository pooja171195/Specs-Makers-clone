 
    let arr=JSON.parse(localStorage.getItem("glass"));
    let image_url = "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/SpecsyBox_1_1024x.jpg?v=1619685903"
    // console.log("arr",arr[0])
    // console.log("cart",cartitems)
   
    displayglass(arr);
    function displayglass(arr){
      let pic = document.createElement("img")
      pic.src=image_url;
      document.getElementById("oneimgdiv").append(pic);
  
      let div = document.createElement("div");
      let pic1 = document.createElement("img");
      pic1.src =image_url;
     
      pic1.addEventListener("click",function(){
        pic.src = arr[0].hover_image_url;
      })
     
      div.append(pic1)
      document.getElementById("threeimgdiv").append(div);


      let maindiv = document.createElement("div");

      let textdiv = document.createElement("div");
      textdiv.setAttribute("id","toptextdivflex");
      let h1tag = document.createElement("h1")
      h1tag.innerHTML=`Lensmakers`;
      let skuname = document.createElement("h4")
      skuname.innerText=`SKU:OWNFRAME `
      textdiv.append(h1tag,skuname);
  
      let totalname=document.createElement("h1")
      totalname.innerText=`Lensmakers: Replace old lenses in your frame.`;
      totalname.setAttribute("id","totalglassname");

      let pricediv = document.createElement("div")
      pricediv.setAttribute("id","glassprice")
      let price = document.createElement("h3")
      price.innerHTML=`₹100`
      let pricetag = document.createElement("p")
      pricetag.innerText="(Including GST)";
      pricediv.append(price,pricetag);
     
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
  
      let buy1get1 = document.createElement("h4")
      buy1get1.textContent = "Buy 1 Get 1 FREE. Use code: SMBOGO at checkout";
      
      let colorball = document.createElement("div");
      colorball.setAttribute("id","colorballname");

      let clrnameh2=document.createElement("h2");
      clrnameh2.textContent="Color: ";
      let colordiv= document.createElement("div");
      colordiv.setAttribute("id","colordiv");
      let div_col=document.createElement("div");
      if(arr[0].color_options.length==[]){
         div_col.style.backgroundColor=arr[0].color;
          colordiv.append(div_col);
        // document.getElementById("colordiv").append(div_col);
      } else{
          let col_obj={};
          let col=[];
          let img_obj=[];
          for(let i = 0; i < arr[0].color_options.length; i++){  
              if(col_obj[arr[0].color_options[i].color]==undefined){
                  col_obj[arr[0].color_options[i].color]=1;
                  col.push(arr[0].color_options[i].color);
                  img_obj.push(arr[0].color_options[i].image_urls);
              }
          }
          for(let x =0; x <col.length; x++){
              let div_col=document.createElement("div");
             div_col.style.backgroundColor=col[x]
             // console.log(img_obj[x][0])
             colordiv.append(div_col);
             //document.getElementById("colordiv").append(div_col);
             div_col.addEventListener("click", function(){
                pic.src=img_obj[x][0];
             })
          }
      }
      colorball.append(clrnameh2,colordiv);
      let colorname = document.createElement("p")
      colorname.innerHTML = `<b>COLOR : MATTE_BLACK_WITH_GREY</b>`;
      colorname.setAttribute("id","colornamediv");

      let btncart = document.createElement("button");
      btncart.textContent="SELECT LENSES AND PURCHASE"
      btncart.style.background='rgb(35,164,212)'
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
 
  
  