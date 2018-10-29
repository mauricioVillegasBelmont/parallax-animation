var animation = bodymovin.loadAnimation({
  container: document.getElementById('svgAnim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'assets/data.json'
});

var imgH= $(window).height();
var imgW= imgH * 1366 / 854;
var contW =  Math.floor(imgW);
var contH = Math.floor($(window).height()*6);
$('head').append('<style type="text/css">\
#animationContainer{\
  width:'+contW+'px;\
  height: '+contH+'px;\
}\
#svgAnim{\
  width:  '+imgW+'px;\
  height: '+imgH+'px;\
}\
width: auto;\
</style>');

var vidSt = $('#diagram').offset().top;
var vidSbLimit = vidSt + ($(window).height()*5);
var lastScroll;
var currentFrame = 0;
var scrollSegment;
var currentScroll = $(window).scrollTop();
var frame = function(){
  var scrollModule = Math.ceil(($('#diagram').height() -  ($(window).height()*1))  / animation.getDuration(true))
  return Math.ceil( (currentScroll - vidSt )/ scrollModule );
}

function isWindowInTop(){
  if(($(window).scrollTop() + ($(window).height()/4)) <= vidSt){
    console.log('is up');
    $('#svgAnim').removeClass('outOfSection-bottom');
    $('#svgAnim').addClass('outOfSection-top');
  }else if(($(window).scrollTop() + $(window).height()*0.75) >= (vidSt + contH)){
    console.log('is down');
    $('#svgAnim').removeClass('outOfSection-top');
    $('#svgAnim').addClass('outOfSection-bottom');
  }else{
    console.log('is in');
    $('#svgAnim').removeClass('outOfSection-bottom outOfSection-top');
  }
}

$(window).on( 'scroll', function(){
  currentScroll = $(window).scrollTop();
  isWindowInTop();
  if(currentScroll >= vidSt && currentScroll <= vidSbLimit){
    animation.goToAndStop(frame(), true);
    if(currentScroll > lastScroll){
      console.log('scrolingDown');
    }else{
      console.log('scrolingUp');
    }
  }
  lastScroll = currentScroll;
});
$(document).ready(function(){
  animation.goToAndStop(frame(), true);
  isWindowInTop();
});
$(window).resize(function(){

})
