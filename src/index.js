'use strict';

import '@babel/polyfill';
import 'dom-node-polyfills';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';

elementClosest(window);

import changeNumber from './modules/changeNumber';


changeNumber();