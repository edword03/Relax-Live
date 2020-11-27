 const changeNumber = () => {
  const arrow = document.querySelector('.header-contacts__arrow'),
    secondNumber = document.querySelector('.header-contacts__phone-number-accord'),
    secondLink = secondNumber.querySelector('a');

  const changeStyle = (position, opacity) => {
    secondNumber.style = `position: ${position};`;
    secondLink.style.opacity = opacity;
  }

  arrow.addEventListener('click', event => {

    if(secondNumber.style.position === `absolute`) {
      changeStyle('static', 1)
    } else {
      changeStyle('absolute', 0)
    }

  })
}

export default changeNumber;