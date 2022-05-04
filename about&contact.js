    // dropdown india js
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        separateDialCode: true,
        excludeCountries: ["in", "il"],
        preferredCountries: ["ru", "jp", "pk", "no"]
    });


// navabr hover js    
$(document).ready(function () {
$('.navbar-light .dmenu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
    });
}); 
 
    $(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
});




// import { about_homeservicecontactabout,contact_homeservicecontactabout ,lastfootersectionjs} from "./component/allscript.js";
// document.querySelector('#homeserviesaboutabout').innerHTML = about_homeservicecontactabout();

// document.querySelector('#lastfootersection').innerHTML = lastfootersectionjs();
// document.querySelector('#homeserviesaboutcontact').innerHTML = contact_homeservicecontactabout();