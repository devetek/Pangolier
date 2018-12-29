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
Object.defineProperty(exports, '__esModule', { value: true });
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/common/http');
var core_1 = require('@angular/core');
var container_1 = require('@app/container'); // Bootsrap Component
var app_1 = require('@app/layout/pixeladmin/header/app'); // Layout Component
var module_1 = require('@modules/home/module');
var app_2 = require('@app/layout/pixeladmin/footer/app'); // Layout Component
/**
 * Additional/custom modules, create yours or import third party here to use global
 */
var services_1 = require('@app/services');
var index_1 = require('@routes/index');
/**
 * Global module initialization, define import module, define declaration module
 * adding new modules to your hole apps, dont make any useless module
 */
var AppModule = /** @class */ (function() {
  function AppModule() {}
  AppModule = __decorate(
    [
      core_1.NgModule({
        imports: [
          platform_browser_1.BrowserModule,
          http_1.HttpClientModule,
          index_1.RoutesModule,
          module_1.HomeModule,
        ],
        declarations: [
          app_1.HeaderComponent,
          container_1.AppComponent,
          app_2.FooterComponent,
        ],
        bootstrap: [container_1.AppComponent],
        providers: [services_1.ApiService],
      }),
    ],
    AppModule,
  );
  return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=init.js.map
