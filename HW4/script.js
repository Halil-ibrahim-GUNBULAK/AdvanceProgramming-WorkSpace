let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let carts= document.querySelectorAll('.add-chart')
let basketClearAndApprove= document.querySelectorAll('.btn')
let productArray=[]
var tags=["p-1","p-2","p-3","p-4","p-5","p-6","p-7","p-8","p-9"]
var boolValue=true;
if(!menu){
  for(let i=0;i<basketClearAndApprove.length;i++){
  
    if(i==0){
      let cartCost=localStorage.getItem("totalCost");
      basketClearAndApprove[0].addEventListener('click',()=>{
        if(cartCost!=null){
        localStorage.clear();}
        else{
          window.alert("sepet zaten boş");
        }
      });
    }
    else if(i==1) {
      basketClearAndApprove[1].addEventListener('click',()=>{
        let cartCost=localStorage.getItem("totalCost");
        if(cartCost!=null){
          window.alert("siparişiniz onaylandı");
        
        
        }else{
          window.alert("sepete eleman eklemeniz gerekiyor");
        }
      
      });
    }
  
    
  }
}
function findIndex(cartItems){
 
  let i=0
  Object.values(cartItems).map(item =>{
          if(item!=null){
            tags[i]=(item.tag)
            i++;
          }
     
  })
}
function myFunction(message) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";
  x.innerText= message
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function plusAndminus(){
  let plusBtns= document.querySelectorAll('.btn2')
  let minusBtns= document.querySelectorAll('.btn1')
  let deleteBtns= document.querySelectorAll('.btn5')
  let cartItems=localStorage.getItem('productsInCart')
  
 
  cartItems=JSON.parse(cartItems)
  if(cartItems!=null){
    findIndex(cartItems)
  }
  for(let i=0;i<deleteBtns.length;i++){
     deleteBtns[i].addEventListener('click',()=>{
      cartNumbers(cartItems[tags[i]],-2);
      totalCost(cartItems[tags[i]],-2)
      
     // deleteItems(tags[i])
    

    });  
  }
  
 
    for(let i=0;i<plusBtns.length;i++){
      plusBtns[i].addEventListener('click',()=>{
     
        
        cartNumbers(cartItems[tags[i]],1);
        totalCost(cartItems[tags[i]],1)
  
      });  
    }
    for(let i=0;i<minusBtns.length;i++){
      minusBtns[i].addEventListener('click',()=>{
      
        if(cartItems[tags[i]].inChart>0){
          
          
          cartNumbers(cartItems[tags[i]],-1);
          totalCost(cartItems[tags[i]],-1)
      
        }
        
        
      });  
    }


  
}



let products=[
  {
    name:"Tepsi Su böreği",
    tag:"p-1",
    price:120,
    inChart:0
  },
  {
    name:"Tepsi İçli Katmer",
    tag:"p-2",
    price:90,
    inChart:0
  },
  {
    name:"Havuçlu Kek",
    tag:"p-3",
    price:40,
    inChart:0
  },
  {
    name:"Çikolotalı Kurabiye",
    tag:"p-4",
    price:40,
    inChart:0
  }, 
  {
    name:"Mantı 1KG",
    tag:"p-5",
    price:60,
    inChart:0
  },
  {
    name:"Tepsi puf poğaça",
    tag:"p-6",
    price:55,
    inChart:0
  },
  {
    name:"Patatesli Kol Böreği",
    tag:"p-7",
    price:120,
    inChart:0
  },
  {
    name:"Elmalı Kurabiye",
    tag:"p-8",
    price:40,
    inChart:0
  },
  {
    name:"Doğal Limonata",
    tag:"p-9",
    price:30,
    inChart:0
  }

]

  for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',()=>{
      myFunction("sepete eklendi")
   
      cartNumbers(products[i],1);
      totalCost(products[i],1)
    
      
    })
  }


function onLoadCartNumbers(){
  let productNumbers=localStorage.getItem('cartNumbers');
 
  if(productNumbers){
 
    document.querySelector(".logo span").textContent=productNumbers
   }
  
}
function deleteItems(productTag){
 
  let cartItems=localStorage.getItem('productsInCart');
       cartItems=JSON.parse(cartItems);
        
       console.log("içeri girdi1")
       if(cartItems!=null){
         
        console.log("içeri girdi2")
            cartItems[productTag]=null;
            tags.remove(productTag)
          
        localStorage.setItem('productsInCart',JSON.stringify(cartItems));   
       }else{
        console.log("içeri girdi3")
        localStorage.clear()
       
      }
      
 

}
function cartNumbers(products,value){
 

   let productNumbers=localStorage.getItem('cartNumbers');

   productNumbers=parseInt(productNumbers);

   if(productNumbers){
     if(value==1){
      localStorage.setItem('cartNumbers',productNumbers+1)
      document.querySelector(".logo span").textContent=productNumbers+1
     }else if(value==-1){
      localStorage.setItem('cartNumbers',productNumbers-1)
      document.querySelector(".logo span").textContent=productNumbers-1
     }else{
      localStorage.setItem('cartNumbers',productNumbers-products.inChart)
      document.querySelector(".logo span").textContent=productNumbers-products.inChart
     }
     
  
    }

   else{
     localStorage.setItem('cartNumbers',1);
     document.querySelector(".logo span").textContent=1
   }
   setItems(products,value);
}
function setItems(product,value){
       let cartItems=localStorage.getItem('productsInCart');
       cartItems=JSON.parse(cartItems);

       if(cartItems!=null){
         
          if(cartItems[product.tag]==undefined){
            cartItems={
              ...cartItems,
              [product.tag]:product
            }
            
           
          }
          if(value==1){
            cartItems[product.tag].inChart +=1;
           
          }else if(value==-1){
            cartItems[product.tag].inChart -=1;
          }else{
            cartItems[product.tag]=null
           
          }
       }else{
       
      
        product.inChart=1;
        cartItems={
          [product.tag]:product
        }
       
      }
      localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}


function totalCost(product,value){
  let cartCost=localStorage.getItem("totalCost");
  

  if(cartCost!=null){
    if(value==1){
      cartCost=parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost+product.price);
     }else if(value==-1){
      cartCost=parseInt(cartCost);
      localStorage.setItem("totalCost",cartCost-product.price);
     }else{
      cartCost=parseInt(cartCost);
      localStorage.setItem("totalCost",cartCost-product.price*product.inChart);
     }
  
  }else{
    localStorage.setItem("totalCost",product.price);
  }
}
function displayChart(){
   let cartItems=localStorage.getItem('productsInCart')
   cartItems=JSON.parse(cartItems)
 
   let proCon=document.querySelector(".products1");
   let cartCost=localStorage.getItem("totalCost");
   if(cartItems && proCon){
   
    proCon.innerHTML='';
   Object.values(cartItems).map(item =>{
     if(item!=null){
      proCon.innerHTML+=   ` <div class="product">
      <a class="btns btn5" href=" " >X</a>
      <img class="image"  src="./images/${item.tag}.jpg">          
      <span>${item.name}</span> </div>
      <div class='price'>${item.price} ₺</div>
      <div class='adet'>
      <a class="btns btn1" href=" " >-</a>
   
     
      ${item.inChart} 
      <a class="btns btn2" href=" " >+</a>
     
      </div>
      <div class='total'>${item.inChart*item.price},00₺ </div>
      `;
     }

                           



   })
   proCon.innerHTML+=` <div class="basketTotal">
                       <h4 class="basketTotalTitle">Toplam</h4>
                       <h4 class="basketTotalvalue">${cartCost},00 ₺</h4>
                         </div>`;


   }
 

  

}

if(menu){
menu.onclick = () =>{
  

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
 

}
if(menu){
window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
}

function loader(){
 
  document.querySelector('.loader-container').classList.add('fade-out');

}

function fadeOut(){
  setInterval(loader, 1000);
}

if(menu){

  window.onload = fadeOut();
}



displayChart()  
onLoadCartNumbers()

if(!menu){
  plusAndminus()
}