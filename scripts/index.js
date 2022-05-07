// Deepak JS starts

// https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick

// <!-- Feautured Recommendations -->
// <!-- Related Products from Top Suppliers -->

// API Calls for above two sections of page
let search = async (url) => {
    const res = await fetch(url);

    let data = await res.json();
   
    return data;
}

let append = (data, container) => {
    data.slice(0, 4).forEach( ({image_link, name, price}) => {

        let mainDiv = document.createElement('div');
        mainDiv.style.border = '1px solid #eaeaea '
        mainDiv.style.padding = '10px 20px 10px 20px';
        mainDiv.style.textAlign = 'center';

        let divImg = document.createElement('img');   
        divImg.style.height = '36%';
        divImg.style.width = '72%';
        divImg.src = image_link;
        divImg.style.cursor = 'pointer';
        divImg.style.border = '1px #efefef solid';

        let divText = document.createElement('div');
        divText.style.height = '64%';

        let title = document.createElement('p');
        title.innerText = name;
        title.style.height = '24px';
        title.style.color = '#2d3192';
        title.style.cursor = 'pointer';
        title.style.fontWeight = 'bold';
        title.onmouseenter = () => {
            title.style.textDecoration = 'underline';
        }
        title.onmouseleave = () => {
            title.style.textDecoration = 'none';
        }

        let amount = document.createElement('p');
        amount.innerHTML = `Rs ${price}/piece`;
        amount.style.fontSize = '20px';
        amount.style.color = '#444';

        let addDiv = document.createElement('div');
        addDiv.style.display = 'flex';
        addDiv.style.justifyContent = 'center';

        let addVerIcon = document.createElement('img');
        addVerIcon.src = './images/check-mark.png';
        addVerIcon.style.width = '20px';
        addVerIcon.style.height = '20px';

        let address = document.createElement('p');
        address.innerHTML = `Bravo International`;
        address.style.marginTop = '2px';
        address.style.cursor = 'pointer';
        address.onmouseenter = () => {
            address.style.textDecoration = 'underline';
        }
        address.onmouseleave = () => {
            address.style.textDecoration = 'none';
        }

        addDiv.append(addVerIcon, address);

        let secAddress = document.createElement('p');
        secAddress.innerHTML = `New Delhi, Delhi, India`;
        secAddress.style.color = '#777';
        secAddress.style.marginTop = '6px';

        let mobDiv = document.createElement('div');
        mobDiv.style.display = 'flex';
        mobDiv.style.justifyContent = 'center';

        let mobIcon = document.createElement('img');
        mobIcon.src = './images/phone.png';
        mobIcon.style.width = '20px';
        mobIcon.style.height = '20px';
        mobIcon.style.paddingRight = '4px';

        let mobNum = document.createElement('p');
        mobNum.innerHTML = `Call 9876543210`;
        mobNum.style.marginTop = '0px';
        mobNum.style.cursor = 'pointer';
        mobNum.onmouseenter = () => {
            mobNum.style.textDecoration = 'underline';
        }
        mobNum.onmouseleave = () => {
            mobNum.style.textDecoration = 'none';
        }

        mobDiv.append(mobIcon, mobNum);

        let btn = document.createElement('button');
        btn.innerText = 'Contact Supplier';
        btn.style.padding = '15px 30px 15px 30px';
        btn.style.backgroundColor = '#03776d';
        btn.style.color = '#fff';
        btn.style.border = '1px solid #03776d';
        btn.style.borderRadius = '6px';
        btn.style.cursor = 'pointer';
        btn.onmouseenter = () => {
            btn.style.transform = 'scale(1.02)';
        }
        btn.onmouseleave = () => {
            btn.style.transform = 'none';
        }

        divText.append(title, amount, addDiv, secAddress, mobDiv, btn);

        mainDiv.append(divImg, divText);
        // console.log(mainDiv)

        // document.getElementById('relProds').append(mainDiv);
        container.append(mainDiv);
        // featRecmd.append(mainDiv);
    })
}

const url1 = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=lipstick'
const url2 = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick`

let boolArr = JSON.parse(localStorage.getItem('bool')) || false;

if(boolArr == false)
{
    boolArr = true;
    localStorage.setItem('bool',boolArr);
    window.addEventListener('load', () => {
        search(url1).then( (data) => {
            let container = document.getElementById('relProds');
            container.innerHTML = null;
      
            append(data, container);
        });
    
        search(url2).then( (data) => {
            let container = document.getElementById('featRecmd');
            container.innerHTML = null;
            append(data, container);
        });
    
     });
}

else
{
    boolArr = false;
    localStorage.setItem('bool',boolArr);
    window.addEventListener('load', () => {
        search(url1).then( (data) => {
            let container = document.getElementById('featRecmd');
            container.innerHTML = null;
      
            append(data, container);
        });
    
        search(url2).then( (data) => {
            let container = document.getElementById('relProds');
            container.innerHTML = null;
            append(data, container);
        });
    
     });
}

// <!-- Return to Top -->

let btnScrollToTop = document.getElementById('btnScrollToTop');

window.addEventListener('scroll', () => {
    scrollFunction();
})


function scrollFunction() {
    // console.log('Hello');
    if( document.documentElement.scrollTop > 20 || document.body.scrollTop > 20)
    {
        // console.log('Hello');
        btnScrollToTop.style.display = "block";
    } 
    else
    {
        btnScrollToTop.style.display = "none";
    }

}

btnScrollToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})

// Deepak JS ends


   





    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
       
        paginationClickable: true,
        

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },



     
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

// Function for input 

// document.querySelector('#button').addEventListener('click', searchForm);

// let searchForm = () => {
//     let query = document.querySelector('#search-input').value;
//     console.log('hrllo');

//     if(query != '')
//     {
//         if(query == 'makeup' || query == 'Makeup')
//         {
//             window.location.href = 'data.html';
//         }
//         if(query == 'foundation' || query == 'Foundation')
//         {
//             window.location.href = 'makeup.html';
//         }
//         if(query == 'lipstick' || query == 'Lipstick')
//         {
//             window.location.href = 'lipstick.html';
//         }
//         if(query == 'lipproduct' || query == 'Lipproduct')
//         {
//             window.location.href = 'lipproduct.html';
//         }
//         if(query == 'scrub' || query == 'Scrub')
//         {
//             window.location.href = 'scrubs.html';
//         }
//         if(query == 'bleach' || query == 'Bleach')
//         {
//             window.location.href = 'bleach.html';
//         }
//     }
// }

// searchForm();

// document.querySelector('#button').addEventListener('click', searchForm);

    
    // import section


   
import {home_homeservicecontactabout ,lastfootersectionjs,main_blue_divbar } from "../component/allscript.js";
document.querySelector('#secondnavabrjs').innerHTML = home_homeservicecontactabout();
document.querySelector('#lastfootersection').innerHTML = lastfootersectionjs();
document.querySelector('.akash_navdiv_blue').innerHTML = main_blue_divbar();

