//DOM load event
// window.addEventListener("DOMContentLoaded", () => {

//   const spotlight = document.querySelector('.spotlight');

//   let spotlightSize = 'transparent 70px, rgba(0, 0, 0, 0.85) 90px)';

//   window.addEventListener('mousemove', e => updateSpotlight(e));

//   window.addEventListener('mousedown', e => {

//     spotlightSize = 'transparent 100px, rgba(0, 0, 0, 0.95) 150px)';

//     updateSpotlight(e);

//   });

//   window.addEventListener('mouseup', e => {

//     spotlightSize = 'transparent 70px, rgba(0, 0, 0, 0.85) 90px)';

//     updateSpotlight(e);

//   });

//   function updateSpotlight(e) {

//     spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

//   }
// });

//Start of blend mode
var modeList = [
  'overlay',
  'soft-light',
  'difference',
  'color-dodge',
  'soft-light',
  'exclusion',
  'overlay',
  'darken',
  'color-dodge',
  'exclusion',
  'soft-light',

],
  elem = document.querySelector('.effect-box'),
  propertyName = 'mix-blend-mode',
  modeElem = document.querySelector('.mode-name'),
  duration = 2500;

var i = 0;
var change = setInterval(function () {
  if (i == modeList.length) i = 0;
  var mode = modeList[i]
  elem.style.mixBlendMode = mode;
  // modeElem.innerText = mode;
  i++;
}, duration);

change();



