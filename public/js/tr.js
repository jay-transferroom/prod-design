const $checkForm = $("#check-form");
const $purchaseForm = $("#purchase-form");
const $registerForm = $("#register-form");
const $nav = $("#nav");
const $navExpand = $("#expand");

var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");

$navHideShowElements = $nav.find('li span, button span');

console.log($navHideShowElements);

$navExpand.css('cursor', 'pointer');
$navExpand.click( function() {
    $(this).find('svg').toggleClass('flip');
    $nav.toggleClass('open');
    $navHideShowElements.toggleClass('show');
});

McButton.click( function() {
  $(this).toggleClass("active");
  
  if (McButton.hasClass("active")) {
    $nav.slideDown();
    McBar1.velocity({ top: "50%" }, {duration: 200, easing: "swing"});
    McBar3.velocity({ top: "50%" }, {duration: 200, easing: "swing"})
          .velocity({rotateZ:"90deg"}, {duration: 800, delay: 200, easing: [500,20] });
    McButton.velocity({rotateZ:"135deg"}, {duration: 800, delay: 200, easing: [500,20] });
  } else {
    McButton.velocity("reverse");
    $nav.slideUp();
    McBar3.velocity({rotateZ:"0deg"}, {duration: 800, easing: [500,20] })
          .velocity({ top: "100%" }, {duration: 200, easing: "swing"});
    McBar1.velocity("reverse", {delay: 800});
  }
});

function scroll() {
    // Add smooth scrolling to all links
    $(".scroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}

function TRinit() {
    console.log('TransferRoom');
    // scroll();
}

TRinit();