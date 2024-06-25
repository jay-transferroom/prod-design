function avoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) {
        return false;
    }
}


function goBack() {
    var cancel = document.getElementById('goBack');
    if(cancel) {
        cancel.onclick = function(e) {
            var back = window.location.pathname.replace(window.location.pathname.split("/").pop(), "");
            window.location.pathname = back;
            e.preventDefault();
        }
    }
    else {
        console.log('No cancel button');
    }
   
}


function init() {
    goBack();
}

init();