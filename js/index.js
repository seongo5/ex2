$(function () {
  let total = $(".panel li").length;
  //   console.log(total);

  let i = 0;
  let stop;

  start();
  $(".progress_bar li div").eq(i).show();

  function fade() {
    $(".panel li").fadeOut();
    $(".panel li").eq(i).fadeIn();
    $(".panel li").removeClass("on");
    $(".panel li").eq(i).addClass("on");

    $(".txt_wrap .txt li").hide();
    $(".txt_wrap .txt li").eq(i).fadeIn();
    $(".progress_bar li div").hide();
    $(".progress_bar li div").eq(i).fadeIn();
  }

  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }

      fade();
    }, 3000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    fade();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    fade();
    start();
  });

  $(".pause").on("click", function () {
    clearInterval(stop);
    $(this).css({ display: "none" });
    $(".play").css({ display: "block" });
  });

  $(".play").on("click", function () {
    $(this).css({ display: "none" });
    $(".pause").css({ display: "block" });
    start();
  });
});
