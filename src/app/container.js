'use strict';
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
var config_1 = require('@app/config');
var core_1 = require('@angular/core');
var DOM_1 = require('@helpers/DOM');
/**
 * Global variables initialization, like define initial state, set initial global variables
 * adding new context to your hole apps, dont make any useless variables here
 * it will decrease our apps peformances, it will be impact to all apps context
 */
var AppComponent = /** @class */ (function() {
  function AppComponent() {
    this.title = config_1.app.title;
    this.description = config_1.app.description;
    this.url = config_1.app.host;
  }
  AppComponent.prototype.ngOnInit = function() {
    /**
     * Your initial middleware
     * This initial using all context of the app, if you want to create sub lifecyle then,
     * create your own module and import here, inject to our app context, or
     * you can assign object into context
     */
  };
  AppComponent.prototype.ngAfterViewInit = function() {
    this.devOnLoaded();
  };
  AppComponent.prototype.devOnLoaded = function() {
    DOM_1.loadCss(config_1.app.externalStyle, { inject: 'endOfBody' });
  };
  AppComponent = __decorate(
    [
      core_1.Component({
        selector: 'profile-devetek',
        templateUrl: './container.html',
      }),
      __metadata('design:paramtypes', []),
    ],
    AppComponent,
  );
  return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=container.js.map
