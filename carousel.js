

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