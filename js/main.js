window.onscroll = function() { myFunction() };

function myFunction() {
  const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  if (scrollTop > 10) {
    document.getElementById("header").classList.add("header-opaque");
  } else {
    document.getElementById("header").classList.remove("header-opaque");
  }
}