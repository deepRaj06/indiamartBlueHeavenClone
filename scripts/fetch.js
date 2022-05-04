// fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick`)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })


//  http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick

let productservice = async (q) => {

    let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=${q}`)


    let data = await res.json()

    return data
    // console.log(data)


}


export { productservice }


let append = (data, container) => {

    data.forEach(({ category,image_link,product_colors:{colour_name}})  =>{

    
    let div = document.createElement("div")


    let img = document.createElement("img")
    img.src = image_link


    let title = document.createElement("div")

    title.innerText = `${colour_name}  ${category}`


    title.setAttribute("id","productservicetitle")


    div.append(img, title)

    container.append(div)

})
}

export { append }