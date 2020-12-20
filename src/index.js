'use strict';

import '@babel/polyfill';
import 'dom-node-polyfills';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';

elementClosest(window);

import changeNumber from './modules/changeNumber';
import changeDialogMenu from './modules/dialogMenu';
import TableDate from './modules/TableDate';
import sliderPartners from './modules/sliderСarousel';
import formulaPopup from './modules/formulaItem';
import Slider from './modules/slider';


sliderPartners(392, 784, '.partners > .wrapper', '.partners-slider', '.slider-arrow_left, .slider-arrow_left > svg > path', '.slider-arrow_right, .slider-arrow_right > svg > path', 'partners-arrow_left', 'partners-arrow_right', 'flex');
changeNumber();
changeDialogMenu();
// 'partners-arrow_left', 'partners-arrow_right'
TableDate();
formulaPopup('formula', '.formula-item-popup', '.formula-item__icon-inner-text')

// const slider = new Slider('.partners-slider', '.partners-slider__slide', '.slider-arrow_left');
// slider.init();

if (document.documentElement.clientWidth <= 1024) {
  sliderPartners('.formula-slider-wrap', '.formula-slider', 'formula-arrow_left', 'formula-arrow_right', 0, 167, 668);
}

// sliderPartners('.formula-slider-wrap', '.formula-slider')