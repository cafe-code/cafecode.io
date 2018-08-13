function changeColor() {
  if( $("body").css("backgroundColor") == "rgb(255, 255, 255)" ) {
    $("body").css({"backgroundColor":"#444","color":"#eee"});
    $(".title,h1,h2,h3,h4,h5,h6").css({"color":"#eee"});
    $("a").css({"color":"#ACCDFF"});
    $("a:hover").css({"color":"white"});
    $(".menu > a").css({"color":"#eee"});
    $(".menu > a:hover").css({"color":"#ccc"});
    $("#color-mode").text("light mode");
  } else {
    $("body").css({"backgroundColor":"white","color":"#444"});
    $(".title,h1,h2,h3,h4,h5,h6").css({"color":"#444"});
    $("a").css({"color":"#537FBC"});
    $("a:hover").css({"color":"#444"});
    $(".menu > a").css({"color":"#444"});
    $(".menu > a:hover").css({"color":"#444"});
    $("#color-mode").text("dark mode");
  }
}

