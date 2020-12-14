const changeNumber = () => {
  const arrow = document.querySelector('.header-contacts__arrow img'),
    secondNumber = document.querySelector('.header-contacts__phone-number-accord'),
    secondLink = secondNumber.querySelector('a');

  const changeStyle = (position, opacity, rotate) => {
    secondNumber.style.position = `${position}`;
    secondLink.style.opacity = opacity;
    arrow.style.transform = `rotateZ(${rotate}deg)`
  }

  arrow.addEventListener('click', event => {

    if(secondNumber.style.position === `absolute`) {
      changeStyle('static', 1, 180);
    } else {
      changeStyle('absolute', 0, 0)
    }

  })
}

export default changeNumber;