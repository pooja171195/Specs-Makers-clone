
 var obj=[
    {
        name: "Airvue",
        descrption: "Airvue Monthly Disposable Contact Lenses. Submit power post placing the order.",
        price: "590",
        image: "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/Regular-Lens-01_9793998e-dc77-447e-a227-e510031daab1_1024x.jpg?v=1596562606",
        price2: "990",
        
        quantity: "SKU: Monthly Disposable Contact Lenses (6 Lenses/Box)"
    },
    {
        name: "Airvue",
        descrption: "Airvue TORIC Monthly Disposable Contact Lenses. Submit power post placing the order.",
        price: "990",
        image: "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/Toric-Lens-01_f950278e-e4f1-4fbe-9574-cd4288a265f9_1024x.jpg?v=1596562599",
        price2: "1190",
        
        quantity: "SKU: Toric Monthly Disposable Contact Lenses (3 Lenses/Box)"
    },
    {
        name: "Airvue",
        descrption: "Airvue Color Contact Lenses. Available in Zero Power only.",
        price: "590",
        image: "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/1_26a8168f-703b-44ae-b11c-fc7d2b5ac57e_1024x.jpg?v=1609760846",
        price2: "990",
        
        quantity: "SKU: Color Contact Lenses - Monthly Disposable - Pack of 2 (ZERO POWER)"
    },
    {
        name: "Airvue",
        descrption: "Airvue Monthly Disposable Contact Lenses - PACK OF 2. FREE COMPLEMENTARY CONTACT LENS SOLUTION. Submit power post placing the order.",
        price: "1190",
        image: "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/Packof2_1024x.jpg?v=1606731910",
        price2: "1980",
        
        quantity: "SKU: MONTHLY DISPOSABLE CONTACT LENSES - PACK OF 2 (6 Lenses/Box)"
    },
    {
        name: "Airvue",
        descrption: "Airvue Monthly Disposable Contact Lenses - Pack of 4. FREE COMPLEMENTARY CONTACT LENS SOLUTION (2 bottles). Submit power post placing the order.",
        price: "2190",
        image: "https://cdn.shopify.com/s/files/1/0015/2879/1092/products/Packof4_1024x.jpg?v=1606733330",
        price2: "3960",
        
        quantity: "SKU: MONTHLY DISPOSABLE CONTACT LENSES - PACK OF 4 (6 Lenses/Box)."
    }
];

function dissort(){
    if(document.getElementById("hidsortcontent").style.display==="block"){
        document.getElementById("hidsortcontent").style.display="none";
    } else{
        document.getElementById("hidsortcontent").style.display="block"
    }
}
function LtH(){
    for(let i = 0; i < obj.length-1; i++) {
        for(let j = i+1; j < com_pro.length; j++){
            if(obj[i].price>obj[j].price){
                let temp = obj[i];
                obj[i]=obj[j]
                obj[j]=temp;
            }
        }
    } 
    document.getElementById("dispro").innerHTML="";
    display(obj);
}
function HtL(){
    for(let i = 0; i < obj.length-1; i++) {
        for(let j = i+1; j < obj.length; j++){
            if(obj[i].price<obj[j].price){
                let temp = obj[i];
                obj[i]=obj[j]
                obj[j]=temp;
            }
        }
    } 
    document.getElementById("dispro").innerHTML="";
    display(obj);
}
console.log(obj)
function display(obj){
    obj.forEach(function(elements){
       document.getElementById("totalprod").innerText=` Total ${obj.length} Products`
       //  console.log(elements)
        let mainDiv=document.createElement("div");
        var img = document.createElement("img");
        img.src=elements.image;
        
        let div2 = document.createElement("div");
        let color= document.createElement("div");
        let div_col=document.createElement("div");
        let img2 = document.createElement("div");
        img2.innerHTML=""
        div2.append(color, img2)

        let div3 = document.createElement("div");
        let prname = document.createElement("div");
        prname.innerText=elements.name;
        let price = document.createElement("div");
        price.innerText = `₹ ${elements.price}`
        let dis_price = document.createElement("div");
        dis_price.innerHTML=elements.price2;
        div3.append(prname, price);

        // let div4 = document.createElement("div");
        // let model = document.createElement("div");
        // model.innerText=elements.model_name;
        // let discount = document.createElement("div");
        // discount.innerText="Buy 1 Get 1 FREE";
        // div4.append(model, discount);

        mainDiv.append(img, div2, div3);
        document.getElementById("dispro").append(mainDiv)
       img.addEventListener("click", function(){
           localStorage.setItem("glass", JSON.stringify(elements));
           window.location.href="../collections/purchase.html";
       })


    })
 }
 display(obj)
