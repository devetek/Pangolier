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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var app_1 = require('@modules/settings/app');
var routes_1 = require('@modules/settings/routes');
var services_1 = require('@app/services');
var SettingsModule = /** @class */ (function() {
  function SettingsModule() {}
  SettingsModule = __decorate(
    [
      core_1.NgModule({
        imports: [common_1.CommonModule, routes_1.SettingsRooutesModule],
        providers: [services_1.MemberService],
        declarations: [app_1.SettingsComponent],
      }),
    ],
    SettingsModule,
  );
  return SettingsModule;
})();
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=module.js.map
