'use strict';
/**
 *
 * @param {Array<string>} arrOfCSS
 * @param {object} options
 *
 * Author: Prakasa <prakasa@devetek.com>
 * Description: This function will help you to load additional css defer, to improve app loading peformance.
 * Change Log:
 * (23/10/2018)
 * - Adding validate browser environment
 * - Support for multiple css input
 * - Support inject header, start of body or end of body
 *
 */
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var loadCss = function(arrOfCSS, options) {
  if (arrOfCSS === void 0) {
    arrOfCSS = [];
  }
  if (options === void 0) {
    options = {};
  }
  if (
    typeof document === 'undefined' ||
    !arrOfCSS.length ||
    arrOfCSS.length === 0
  ) {
    return;
  }
  var defaultPptions = __assign({ inject: 'body' }, options);
  var inject = defaultPptions.inject;
  arrOfCSS.map(function(css) {
    var newElement = document.createElement('link');
    newElement.rel = 'stylesheet';
    newElement.href = css;
    newElement.type = 'text/css';
    if (inject === 'head') {
      var goDefer = document.getElementsByTagName('link')[0];
      goDefer.parentNode.insertBefore(newElement, goDefer);
    } else {
      var body = document.getElementsByTagName('body')[0];
      if (inject === 'endOfBody') {
        var firstChild = body.firstChild;
        body.insertBefore(newElement, firstChild);
      } else {
        body.appendChild(newElement);
      }
    }
  });
  return;
};
exports.default = loadCss;
//# sourceMappingURL=loadCss.js.map
