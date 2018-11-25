import 'zone.js/dist/zone';

import { hmrBootstrap } from './hmr'; // NOTES: Development Only

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@app/init';
import { canUseDOM } from '@helpers/DOM';

const debug = require('debug');

if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

export function mainBootstrap() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

/**
 * this function use for remove our loader, it will moving into state management on angular
 * please makesure or move this as soon as possible if you can
 * its not sync with angular flow and async process
 */
const removeLoader = () => {
  if (canUseDOM) {
    setTimeout(() => {
      const element = document.getElementById('preloader');
      element.remove();
    }, 2000);
  }
};

debug(
  module['hot'] && process.env.NODE_ENV === 'development'
    ? 'HMR loaded'
    : 'HMR Fail to load',
);

if (module['hot'] && process.env.NODE_ENV === 'development') {
  hmrBootstrap(module, mainBootstrap);
} else {
  if (document.readyState === 'complete') {
    mainBootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', mainBootstrap);
  }
}

removeLoader();
