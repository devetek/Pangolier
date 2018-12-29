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
var http_1 = require('@angular/common/http');
var operators_1 = require('rxjs/operators');
var api_1 = require('@app/services/api');
var MemberService = /** @class */ (function() {
  function MemberService(apiService, http) {
    this.apiService = apiService;
    this.http = http;
    this.HOST = 'https://api.myjson.com';
  }
  /**
   * @description: Get all data members
   */
  MemberService.prototype.getMembers = function() {
    return this.apiService.get(this.HOST + '/bins/a1d26').pipe(
      operators_1.map(function(data) {
        return data;
      }),
    );
  };
  /**
   * @param: {string} id - Member id
   * @description: Get member by specific id
   */
  MemberService.prototype.getMemberById = function(id) {
    var options = id
      ? new http_1.HttpParams({ fromObject: { id: id } })
      : new http_1.HttpParams();
    return this.apiService.get(this.HOST + '/bins/a1d27', options).pipe(
      operators_1.map(function(data) {
        return data;
      }),
    );
  };
  MemberService = __decorate(
    [
      core_1.Injectable(),
      __metadata('design:paramtypes', [api_1.ApiService, http_1.HttpClient]),
    ],
    MemberService,
  );
  return MemberService;
})();
exports.MemberService = MemberService;
//# sourceMappingURL=index.js.map
