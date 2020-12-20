const formulaItem = (selector, popups, spans) => {
  const wrap = document.getElementById(selector),
    popUpsWindows = document.querySelectorAll(popups),
    icons = document.querySelectorAll(spans);

  const init = (e, fun, visability, opacity) => {
    const target = e.target;

    icons.forEach((item, index) => {
      if (target === item) {
        fun(index, visability, opacity);
      }
    });
  };

  const showPopUp = (index, visability, opacity) => {
    popUpsWindows.forEach((item, i) => {
      if (i === index) {
        item.style.visibility = visability;
        item.style.opacity = opacity;
      }
    })
  };

  
  wrap.addEventListener('mouseover', e => {
    init(e, showPopUp, 'visible', '1')
  });

  wrap.addEventListener('mouseout', e => {
    init(e, showPopUp, 'hidden', '.1')
  });

};

export default formulaItem;