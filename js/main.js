$(document).ready(function() {
  $("a.video").on("click", function() {
    // Gets the video src/target from the a

    let theModal = $(this).data("target");
    let videoSrc = $(this).attr("data-video");

    let videoSrcAutoPlay =
      videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";

    $(theModal + " iframe").attr("src", videoSrcAutoPlay);
    $(theModal + " button.close").click(function() {
      $(theModal + " iframe").attr("src", videoSrc);
    });
  });

  // Get the current date
  $("#year").text(new Date().getFullYear());

  // initialize slick slider
  $(".slider").slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  });
});
