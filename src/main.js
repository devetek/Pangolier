'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('zone.js/dist/zone');
var hmr_1 = require('./hmr'); // NOTES: Development Only
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var init_1 = require('@app/init');
var DOM_1 = require('@helpers/DOM');
var debug = require('debug');
if (process.env.NODE_ENV === 'production') {
  core_1.enableProdMode();
}
function mainBootstrap() {
  return platform_browser_dynamic_1
    .platformBrowserDynamic()
    .bootstrapModule(init_1.AppModule);
}
exports.mainBootstrap = mainBootstrap;
/**
 * this function use for remove our loader, it will moving into state management on angular
 * please makesure or move this as soon as possible if you can
 * its not sync with angular flow and async process
 */
var removeLoader = function() {
  if (DOM_1.canUseDOM) {
    setTimeout(function() {
      var element = document.getElementById('preloader');
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
  hmr_1.hmrBootstrap(module, mainBootstrap);
} else {
  if (document.readyState === 'complete') {
    mainBootstrap();
  } else {
    document.addEventListener('DOMContentLoaded', mainBootstrap);
  }
}
removeLoader();
//# sourceMappingURL=main.js.map
