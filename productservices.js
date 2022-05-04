
 //http://makeup-api.herokuapp.com/api/v1/products.json?brand=blueheaven&product_type=lipstick

// http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick



fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`)
.then((res)=>{
    return res.json()
})
.then((res)=>{
    console.log(res)
})



import { productservice,append } from "./scripts/fetch.js";

{
let q="lipstick";



productservice(q).then((data)=>{
      
let h3=document.createElement("h3")

h3.innerText="Lipstick"

data.splice(0,3)
let container=document.querySelector("#lipstick")

append(data,container)




})


}


{

    let q="foundation";



    productservice(q).then((data)=>{
          
    let h3=document.createElement("h3")
    
    h3.innerText="Foundation"
    data.splice(4,8)
    let container=document.querySelector("#foundation")
    
    append(data,container)
    
})
}

