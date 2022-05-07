var show = document.getElementById("cp_containerdiv-1");

// get the button which will open the box
var btn = document.getElementById("touch")


var span1 = document.querySelector(".cp_cross");

btn.onclick = function() {
    show.style.display = "block";
    body.style.filer = "blur(5px)";
}



span1.onclick = function() {
    show.style.display = "none";
    console.log(1)
}










var show1 = document.querySelector("#cp_submitted-1");

var btn1 = document.getElementById("cp_next-1");

btn1.onclick = function(){
    show1.style.display= "block";
    show.style.display = "none";
}


var span2 = document.querySelector(".cp_cross-1");

span2.onclick = function(){
    show1.style.display = "none";
}

// window.onclick = function(event){
//     if(event.target == show){
//         show.style.display = "none"; 
//     }
// }














    // const trigger = document.querySelector('#trigger');
    // const modalWrapper = document.querySelector('.modal__wrapper');
    // const modalWrapper1 = document.querySelector('.modal__wrapper1')
    // const closeBtn = document.querySelector('.close');
    // const trigger1= document.querySelector('#first');
    // const but2=document.querySelector(".close1")
    // trigger1.addEventListener('click',function(){
    // openModal1()
    // // console.log(1)
    // })
    // trigger.addEventListener('click', function(){
    //     openModal();
    //     // console.log(1)
    // });
    
    // closeBtn.addEventListener('click', function(){
    //     closeModal();
    //     console.log(1)
    // });
    
    // but2.addEventListener('click', function(){
    //     closeModal1();
    
    // });
    
    
    // modalWrapper.addEventListener('click', function(e){
    //     if(e.target !== this) return;
    //     closeModal();
    //     closeModal1();
    // });
    
    // document.addEventListener('keydown', function(e){
    //     if(e.key === 'Escape') {
    //         closeModal();
    //         closeModal1();
    //     }
    // })
    
    // function openModal() {
    //     modalWrapper.classList.add('active');
    // }
    // function closeModal() {
    //     modalWrapper.classList.remove('active');
       
    // }
    
    // function openModal1() {
    //     modalWrapper.classList.remove('active');
    //     modalWrapper1.classList.add('active');
       
    // }
    // function closeModal1() {
    
    //     modalWrapper1.classList.remove('active');
    // }
    