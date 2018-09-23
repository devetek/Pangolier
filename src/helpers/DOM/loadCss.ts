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

const loadCss = (arrOfCSS: Array<string> = [], options: object = {}) => {
  if (typeof document === 'undefined' || !arrOfCSS.length || arrOfCSS.length === 0) {
    return;
  }

  const defaultPptions = {
    inject: 'body',
    ...options,
  };
  const { inject } = defaultPptions;

  arrOfCSS.map(css => {
    const newElement = document.createElement('link');

    newElement.rel = 'stylesheet';
    newElement.href = css;
    newElement.type = 'text/css';

    if (inject === 'head') {
      const goDefer = document.getElementsByTagName('link')[0];

      goDefer.parentNode.insertBefore(newElement, goDefer);
    } else {
      const body = document.getElementsByTagName('body')[0];

      if (inject === 'endOfBody') {
        const firstChild = body.firstChild;
        body.insertBefore(newElement, firstChild);
      } else {
        body.appendChild(newElement);
      }
    }
  });

  console.log('www');

  return;
};

export default loadCss;
