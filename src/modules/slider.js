export default class Slider {
  constructor(slideBlock, slides, leftArrow) {
    this.slideBlock = document.querySelector(slideBlock);
    this.slides = document.querySelectorAll(slides);
    this.currentSlide;
    this.leftArrow = leftArrow
  }

  prevSlide(slide, index) {
    slide[index].style.display = 'none';
  }

  nextSlide(slide, index) {
    lide[index].style.display = 'flex';
  }


  init(){
    this.slideBlock.addEventListener('click', event => {
      console.log(this);
      let target = event.target;

      if(target.matches('.slider-arrow_left')) {
        console.log(1);
      }
    });
  }
}