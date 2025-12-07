const images = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
];

window.onload = function () {
  const sliderElement = document.getElementById("slider");
  const nextButton = document.getElementById("next");
  const goButton = document.getElementById("go");
  const stopButton = document.getElementById("stop");

  let mins = document.getElementsByClassName("mini");
  for (let i = 0; i < mins.length; i++) {
    mins[i].addEventListener("click", showImage);
  }

  nextButton.addEventListener("click", next);
  goButton.addEventListener("click", goAuto);
  stopButton.addEventListener("click", stop);

  let timer;
  let t;

  let index = 0;

  function next() {
    addEffect();
    t = setTimeout(changeEffect, 500);

    t = setTimeout(removeEffect, 1000);
  }

  function changeEffect() {
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
    sliderElement.src = images[index];
  }

  function goAuto() {
    stop();
    timer = setInterval(next, 1000);
  }

  function stop() {
    clearInterval(timer);
  }

  function showImage(event) {
    let image = event.target;
    //let name = image.src;
  }

  function addEffect() {
    sliderElement.classList.add("fade");
  }

  function removeEffect() {
    sliderElement.classList.remove("fade");
  }
  // addEffect()
};
