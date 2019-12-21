window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").classList.add("opaque");
  } else {
    document.getElementById("header").classList.remove("opaque");
  }
}