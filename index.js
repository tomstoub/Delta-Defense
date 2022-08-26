//activates function on scroll
window.onscroll = function() {stickyHeader()}; 

//get the header and its position
let header = document.getElementById("logoHeader");
let sticky = header.offsetTop;

//sets sticky class when scrolled and removes when not
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//I left the header in the mobile version because I think it's useful to the user, and adds to overall consistency between mobile and desktop versions