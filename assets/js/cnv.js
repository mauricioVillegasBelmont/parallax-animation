var canvas = document.getElementById("scroll-video");
var ctx = canvas.getContext('2d');


function cnvSizer(){
  var contDiagW = $('#diagram').width();
  var contDiagH = $(window).height();
  $('#scroll-video').width(contDiagW);
  $('#scroll-video').height(contDiagH);
}
//const fish = document.getElementById("fish");
//console.log(fish.currentSrc);

/*var URL = window.URL || window.webkitURL;
var file = fish.currentSrc;
var url = URL.createObjectURL(file);
console.log(url);*/


// fish.load();
// var stored = [];
// var lastScrollTop = 0;
// var fwo = 0;
// var fho = 0;
// var fw;
// var fh;
// var ft = 0;

// function fishSetup() {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     fw = (canvas.height * fish.videoWidth) / fish.videoHeight;
// }
// $(window).resize(fishSetup);
// fish.oncanplay = function () {}

// if (window.FileReader && window.Blob) {
//     // All the File APIs are supported.
//     console.log('file appi supported');
// } else {
//     console.log('file appi not supported');
//     // File and Blob are not supported
// }
// $.fn.scrollEnd = function(callback, timeout) {
//   $(this).scroll(function(){
//     var $this = $(this);
//     if ($this.data('scrollTimeout')) {
//       clearTimeout($this.data('scrollTimeout'));
//     }
//     $this.data('scrollTimeout', setTimeout(callback,timeout));
//   });
// };

// how to call it (with a 1000ms timeout):
// $(window).scrollEnd(function(){
//   //console.log('scroll end');
//   fish.pause();
// }, 250);
// $(window).scroll(function (event) {
//     fish.play();
// });
//
// $(window).scroll(function (event) {
//   //var st = $(this).scrollTop();
//   scrollEvents($(this).scrollTop());
// });


//
//
// fish.onloadeddata = function () {
//     fishSetup();
//     render(fish);
//     $(document).keydown(function (event) {
//         if (event.keyCode == 37) {
//             //console.log('prev');
//             ft -= 1;
//         }
//         else if (event.keyCode == 39) {
//             //console.log('next');
//             ft += 1;
//         }
//         if (ft >= fish.duration) {
//             ft = 0;
//         }
//         else if (ft <= 0) {
//             ft = fish.duration;
//         }
//         fish.currentTime = ft;
//     });
//     $(window).scroll(function (event) {
//         var st = $(this).scrollTop();
//         if (st > lastScrollTop) {
//             //console.log("down")
//             ft += 1;
//         }
//         else {
//             //console.log("up")
//             ft -= 1;
//         }
//         if (ft >= fish.duration) {
//             ft = 0;
//         }
//         else if (ft <= 0) {
//             ft = fish.duration;
//         }
//         lastScrollTop = st;
//         fish.currentTime = ft;
//         scrollEvents(st);
//     });
// }
// fish.onseeked = function () {
//     render(fish);
// };
//
// function render(video) {
//     ctx.drawImage(video, fwo, fho, fw, canvas.height);
// }


$(document).ready(function(){
  cnvSizer();
});
