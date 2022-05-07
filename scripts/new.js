
let appendprod = (data, container) => {


    
    data.forEach(({img,desc})  =>{



        // console.log(data)
    
    let div = document.createElement("div")

let anch=document.createElement("a")

anch.setAttribute("id","anch")
// anch.href="makeup.html"
    let image = document.createElement("img")
    image.src = img
    // console.log(image)
  anch.append(image)


    let title = document.createElement("div")

   

    let anchor = document.createElement("a")
    anchor.innerText = desc

title.append(anchor)
    // console.log(colour_name)


    title.setAttribute("id","producttitle")
    // title.style.textDecoration="capitalize"


    div.append(anch, title)

    container.append(div)

})
}


export {appendprod}