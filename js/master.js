//When web is clicked, turn background orange.
function webClick() {
  var bGround = document.getElementsByTagName("body")[0];

  if (bGround.classList.contains("model-color")) {
    bGround.classList.remove("model-color");
  }

  bGround.classList.add("web-color");
}

//When modeling is clicked, turn background green.
function modelClick() {
  var bGround = document.getElementsByTagName("body")[0];

  if (bGround.classList.contains("web-color")) {
    bGround.classList.remove("web-color");
  }

  bGround.classList.add("model-color");
}

$(".intro button").click(function(){
  $("#plsChoose").collapse();
});
