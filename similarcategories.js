// fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=blueheaven&product_type=lipgloss`)
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })



// var similarcategoriesprod = [
//     //1
//     {
//         title: "Natural And Chemical Free Lipstick ( Pink Colour )",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/4/YP/JQ/ES/112041886/jpg-20220424-122355-0000-500x500.jpg",
//         price: 450,
//         traders: "Mavashivaa - Golden Traders"
//     },

//     //2

//     {
//         title: "Floral Lips",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/4/GP/RM/YM/61819412/florallips2-500x500.jpg",
//         price: 699,
//         traders: "Artist Space"
//     },


//     //3

//     {
//         title: "5 In 1 Lipstick Combination Strip Matte Velvet High Color Rendering Pen Long Lasting Waterproof Nonstick Lipstick 7.5g",

//         image: "https://5.imimg.com/data5/ECOM/Default/2022/4/ET/CW/NP/65058394/h57e9e0bb16864122a7ccf68711edb724w-500x500.png",
//         price: 899,
//         traders: "TRENDY FASHION HUB"
//     },

//     //4 


//     {
//         title: "3-Color Single Lipstick Moisturizing Color Waterproof Temptation Of Angels Black Diamond Lipstick 3",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/4/YP/LM/JT/9422220/hair-nose-lip-3-color-single-lipstick-moisturizing-color-waterproof-temptation-of-angels-222-500x500.jpg",
//         price: 1499,
//         traders: "My Online Collection Store "
//     },

//     // 5

//     {
//         title: "Color Glam London Lipsticks, Pack Of 5",
//         image: "https://5.imimg.com/data5/ECOM/Default/2021/11/QO/YM/CD/81412824/c1157078-1-500x500.jpg",
//         price: 299,
//         traders: "Worldshopon"
//     },

//     //6 
//     {
//         title: "Popfeel Matte Lip Gloss Liquid Lipstick",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/2/PE/PY/TW/147540438/product-image-1134802003-500x500.jpg",
//         price: 338,
//         traders: "Aadhyacollections"
//     },

//     // 7

//     {
//         title: "Binddas Pack Of 3  Lazy Lip Lipstick Matte",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/3/OR/CK/RV/139286493/ezgif-5-2bc60a5c81-500x500.jpg",
//         price: 599,
//         traders: "Ghostbare. Com"
//     },

//     // 8

//     {
//         title: "Beauty Matte Finish Liquid Lipstick Set Of 12",
//         image: "https://5.imimg.com/data5/ECOM/Default/2022/1/AV/EK/BS/6097999/1572524615508-makeupfeverliquidlipsticksetsdl9747817532a79c7-originnm80prcnt-500x500.jpg",
//         price: 540,
//         traders: "Opencho"
//     },





// ]





let similarcategoriesprod = []


class SimilarCategories {

    constructor(ti, img, pr, tr) {

        this.title = ti;

        this.image = img;

        this.price = pr;

        this.traders = tr;

    }

}

class products extends SimilarCategories {


    constructor(ti, img, pr, tr) {


        super(ti, img, pr, tr)

    }
}




let p1 = new products("Natural And Chemical Free Lipstick ( Pink Colour )", "https://5.imimg.com/data5/ECOM/Default/2022/4/YP/JQ/ES/112041886/jpg-20220424-122355-0000-500x500.jpg", 450, "Mavashivaa - Golden Traders")

console.log(p1)



let p2 = new products("Floral Lips", "https://5.imimg.com/data5/ECOM/Default/2022/4/GP/RM/YM/61819412/florallips2-500x500.jpg", 699, "Artist Space")
console.log(p2)


let p3 = new products("5 In 1 Lipstick Combination Strip Matte Velvet High Color Rendering Pen Long Lasting Waterproof Nonstick Lipstick 7.5g", "https://5.imimg.com/data5/ECOM/Default/2022/4/ET/CW/NP/65058394/h57e9e0bb16864122a7ccf68711edb724w-500x500.png", 899, "TRENDY FASHION HUB")

console.log(p3)



let p4 = new products("3-Color Single Lipstick Moisturizing Color Waterproof Temptation Of Angels Black Diamond Lipstick 3", "https://5.imimg.com/data5/ECOM/Default/2022/4/YP/LM/JT/9422220/hair-nose-lip-3-color-single-lipstick-moisturizing-color-waterproof-temptation-of-angels-222-500x500.jpg", 1499, "My Online Collection Store ")

console.log(p4)


let p5 = new products("Color Glam London Lipsticks, Pack Of 5", "https://5.imimg.com/data5/ECOM/Default/2021/11/QO/YM/CD/81412824/c1157078-1-500x500.jpg", 299, "Worldshopon")

console.log(p5)

let p6 = new products("Popfeel Matte Lip Gloss Liquid Lipstick", "https://5.imimg.com/data5/ECOM/Default/2022/2/PE/PY/TW/147540438/product-image-1134802003-500x500.jpg", 338, "Aadhyacollections")

console.log(p6)


let p7 = new products("Binddas Pack Of 3  Lazy Lip Lipstick Matte", "https://5.imimg.com/data5/ECOM/Default/2022/3/OR/CK/RV/139286493/ezgif-5-2bc60a5c81-500x500.jpg", 599, "Ghostbare. Com")

console.log(p7)

let p8 = new products("Beauty Matte Finish Liquid Lipstick Set Of 12", "https://5.imimg.com/data5/ECOM/Default/2022/1/AV/EK/BS/6097999/1572524615508-makeupfeverliquidlipsticksetsdl9747817532a79c7-originnm80prcnt-500x500.jpg", 540, "Opencho")

console.log(p8)


similarcategoriesprod.push(p1, p2, p3, p4, p5, p6, p7, p8)

console.log(similarcategoriesprod)


similarcategoriesprod.forEach(({ title, image, price, traders }) => {



    let container = document.getElementById("similarcategoriesprod")

    let bigdiv = document.createElement("div")


    bigdiv.setAttribute("id", "bigdiv")



    let topdiv = document.createElement("div")

    let img = document.createElement("img")

    img.src = image



    let bottomdiv = document.createElement("div")

    bottomdiv.setAttribute("id", "bottomdiv")




    let namediv = document.createElement("div")
    let titlename = document.createElement("a")
    titlename.innerText = title

    namediv.append(titlename)






    // let anch_1 = document.createElement("a")


    // titlename.append(anch_1)


    namediv.setAttribute("id", "namediv")


    let amount = document.createElement("p")
    amount.innerText = "₹" + price

    amount.setAttribute("id", "amountdiv")




    let btn = document.createElement("button")

    btn.innerText = " Buy Now"

    let anch_2 = document.createElement("a")
    btn.append(anch_2)





    let traderdiv = document.createElement("div")

    let trader = document.createElement("a")
    trader.innerText = traders

    traderdiv.setAttribute("id", "traderdiv")

    // let anch_3 = document.createElement("a")

    // trader.append(anch_3)

    traderdiv.append(trader)


    topdiv.append(img)
    bottomdiv.append(namediv, amount, btn, traderdiv)

    bigdiv.append(topdiv, bottomdiv)


    container.append(bigdiv)






})















