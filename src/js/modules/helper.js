/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
               Check Mobile Device
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const isMobile = () => {
  return !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
};










/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Map number x from range [a, b] to [c, d]
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;











/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Linear interpolation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const lerp = (a, b, n) => (1 - n) * a + n * b;
const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);

const MathUtils = {
  lerp: (a, b, n) => (1 - n) * a + n * b,
  distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
};








/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            Gets the mouse position
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
};









/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           Generate Random Float
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           Call Full Screen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const fullScreen = (invoker) => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (invoker.requestFullscreen) {
      invoker.requestFullscreen();
    } else if (invoker.webkitRequestFullscreen) {
      invoker.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};














/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
             document.queryselector()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let select = (e) => document.querySelector(e);













/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                Gsap Debugger
                
      let tl = gsap.timeline({onUpdate: gsapDebugSlider})
      gsapDebug(tl);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const gsapTool = select(".gsapTool");

function gsapDebug(tweenObject) {
  if (gsapTool) {
    const play = select(".play");
    const rev = select(".rev");
    const restart = select(".restart");

    var tl = tweenObject;

    play.addEventListener("click", () => {
      tl.paused(!tl.paused());
      if (tl.progress() == 1) {
        tl.restart();
      }
    });

    rev.addEventListener("click", () => {
      tl.reversed(!tl.reversed());
    });

    restart.addEventListener("click", () => {
      tl.restart();
    });

    slider.addEventListener("input", function () {
      tl.progress(this.value).pause();
    });
  }
}

function gsapDebugSlider() {
  if (gsapTool) {
    const slider = select("#slider");
    const time = select("#time");
    slider.value = this.progress();
    time.innerHTML = this.time().toFixed(2);
  }
}











/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                           My Signature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function signature() {
  setTimeout(() => {
    console.clear(),
      console.log(`

                             †иɐ⅄нsnĐ  ʎꓭ   

                     🤍  https://dushyant.dev/ 🤍 

      `);
  }, 5000);
}

export {
  gsapDebug,
  isMobile,
  map,
  lerp,
  clamp,
  MathUtils,
  getMousePos,
  getRandomFloat,
  fullScreen,
  select,
  gsapDebugSlider,
  signature,
};
