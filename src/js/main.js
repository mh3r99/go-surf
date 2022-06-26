$(function () {
  $(".header__slider").slick({
    infinity: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/icons/arrows-left.svg" alt="prev"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/icons/arrows-right.svg" alt="next"/>',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/icons/arrows-left.svg" alt="prev"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/icons/arrows-right.svg" alt="next"/>',
    asNavFor: ".slider-map",
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });

  $(".holder__slider, .shop__slider").slick({
    infinity: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/icons/arrows-left.svg" alt="prev"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/icons/arrows-right.svg" alt="next"/>',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/icons/plus.svg" alt="" /></div><div class="quantity-button quantity-down"><img src="images/icons/minus.svg" alt="" /></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let sum =
      $(".nights").val() * $(".sum").data("nights") +
      ($(".guests").val() - 1) * $(".sum").data("guests");
    $(".sum").html("$" + sum);
  });

  let sum =
    $(".nights").val() * $(".sum").data("nights") +
    ($(".guests").val() - 1) * $(".sum").data("guests");
  $(".sum").html("$" + sum);

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });
});
