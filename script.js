///increment and decrement of button in products container

let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let num = document.querySelectorAll(".num");

let category = [{
        product : "Product-1",
        price : 100,
        qty : 0,
    },

     {
        product : "Product-2",
        price : 200,
        qty : 0,
    },

    {
        product : "Product-3",
        price : 300,
        qty : 0,
    }
];

// // console.log(plus);
// plus.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//         // let qty  = item.querySelector('add-item');
//         // console.log(qty);

//         console.log(e);
//     })
// })

function totalClick(click){
    const totalClicks = document.getElementById('add-item-1');
    const sumValue = parseInt(totalClicks.innerText)+click;
    if(sumValue >= 0){
        totalClicks.innerText = sumValue;
    }  
}
