/* Part 4 — animations with .animate(). */

$(document).ready(function () {

  var startState = {
    width: "90px",
    height: "90px",
    left: "20px",
    top: "20px",
    opacity: 1
  };

  /* ---------- Task 8: basic animation (size + position) ---------- */
  $("#btn-animate-basic").on("click", function () {
    $("#box8").animate({
      width: "180px",
      height: "180px",
      left: "420px",
      top: "60px"
    }, 900);
  });

  $("#btn-reset-8").on("click", function () {
    $("#box8").stop(true, true).css(startState);
  });

  /* ---------- Task 9: sequential animation ---------- */
  $("#btn-animate-sequence").on("click", function () {
    var $box = $("#box9");
    $box.stop(true, true);
    $box.css(startState);

    $box
      .animate({ left: "560px" }, 600)                                   // 1. move right
      .animate({ top: "120px" }, 600)                                    // 2. move down
      .animate({ width: "50px", height: "50px" }, 600)                   // 3. shrink
      .animate({ left: "20px", top: "20px", width: "90px", height: "90px" }, 700); // 4. return
  });

  $("#btn-reset-9").on("click", function () {
    $("#box9").stop(true, true).css(startState);
  });

  /* ---------- Task 10: combined animation in one call ---------- */
  $("#btn-animate-combined").on("click", function () {
    var $box = $("#box10");
    $box.stop(true, true).css(startState);

    // Opacity, size and movement all animate together.
    $box.animate({
      opacity: 0.25,
      width: "200px",
      height: "200px",
      left: "480px",
      top: "40px"
    }, 1000, function () {
      // Called once the animation has finished.
      $box.animate(startState, 700);
    });
  });

  $("#btn-reset-10").on("click", function () {
    $("#box10").stop(true, true).css(startState);
  });
});
