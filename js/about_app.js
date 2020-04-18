function readFile() { 

//slider
$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll:1
});

//date

$('#year').text(new Date().getFullYear());
}