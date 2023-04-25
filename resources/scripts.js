window.onload = function () {
  document.getElementsByTagName("body")[0].classList.remove("preload");
};

window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document
      .getElementById("sticky-header")
      .classList.add("background-light-blue");
    document
      .getElementById("sticky-header")
      .classList.remove("colour-light-blue");
    document
      .getElementById("sticky-header")
      .classList.add("colour-chocolate");
  } else {
    document
      .getElementById("sticky-header")
      .classList.remove("background-light-blue");
    document
      .getElementById("sticky-header")
      .classList.add("colour-light-blue");
    document
      .getElementById("sticky-header")
      .classList.remove("colour-chocolate");
  }
};
