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
var core_1 = require('@angular/core');
var member_1 = require('@app/services/member');
var SettingsComponent = /** @class */ (function() {
  function SettingsComponent(memberService) {
    this.memberService = memberService;
    this.loading = false;
    this.results = { data: [], hasNext: false };
    this.hasNext = false;
  }
  SettingsComponent.prototype.ngOnInit = function() {
    var _this = this;
    this.loading = true;
    this.memberService.getMembers().subscribe(function(response) {
      _this.loading = false;
      if (response.data.length > 0) {
        _this.results = response;
        _this.hasNext = response.hasNext || false;
      }
    });
  };
  SettingsComponent = __decorate(
    [
      core_1.Component({
        selector: 'settings-module',
        templateUrl: './view.html',
        styleUrls: ['./style.css'],
      }),
      __metadata('design:paramtypes', [member_1.MemberService]),
    ],
    SettingsComponent,
  );
  return SettingsComponent;
})();
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=app.js.map
