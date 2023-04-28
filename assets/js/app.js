let header = document.querySelector("header");
let buyProBtn = document.querySelectorAll(".fa-cart-shopping");
let buyProBt = document.querySelectorAll(".mxm");

let productListData = document.querySelector("#productListData");
let totalProductList = document.querySelector(".Total");
let mode = document.querySelector(".bi-moon");
console.log(header, buyProBtn, productListData, totalProductList);
let upBtn = document.querySelector("#up")



let Locksprod = document.querySelectorAll(".Best-product .prod");
let Locknav =document.querySelector(".mxm")
// console.log(Locksprod,Locknav);
let index = 1;
for (let i = 0; i < Locksprod.length; i++) {
  console.log(i);
  // if (index >= 6) break;
  Locksprod[i].onclick = (_) => {
    console.log("kkk");
    Locknav.style.opacity = "1";
    // if()

    Locknav.innerHTML = index++;
    Locksprod[i].classList.add("disabled");
  };
}

// // onscroll = _ => {
// //     if (scrollY > 0) {
// //         header.classList.add("headerScoll");
// //         upBtn.classList.remove("d-none")
// //     } else {
// //         header.classList.remove("headerScoll");
// //         upBtn.classList.add("d-none")
// //     }
// // }

// // buyProBtn[0].onclick = _=>{
// //     totalProductList.innerHTML = "asdasdasd";

// // }

let productScr 
let productName 
let productPrice 
let total = 0;
buyProBtn.forEach(buyBtn => {
    buyBtn.onclick = _ => {
        productScr = buyBtn.parentElement.parentElement.children[3].src;
        productName = buyBtn.parentElement.children[3].innerText;
        productPrice =Number(buyBtn.parentElement.children[5].innerText) ;
        
        console.log(productPrice);
        total = total + Number(productPrice)
        total += Number(productPrice)
        let y = total

        totalProductList.innerText = y  ;




        productListData.innerHTML += `<div class="col d-flex align-items-center gap-5 border p-2">
                                        <img src="${productScr}" alt="" class="img-fluid w-25">
                                        <h6>${productName}</h6>
                                        <p>${productPrice}</p>
                                    </div>`;






    }

});

// let navbarImgALL = document.querySelectorAll(".navbar-brand img")
// let cards = document.querySelectorAll(".card")
// mode.onclick =_=>{
//     document.body.classList.toggle("dark")
//     navbarImgALL[0].classList.toggle("d-none")
//     navbarImgALL[1].classList.toggle("d-none")
//     header.classList.toggle("dark");
   
//     cards.forEach(element => {
//         element.classList.toggle("dark");
//         element.style.backgroundColor = "transparent"
//     });
// }


// upBtn.onclick = _=>{
//     scrollTo({top:0 , left:0 , behavior:"smooth"})
// }