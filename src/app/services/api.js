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
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
/**
 * @author: Prakasa <prakasa@devetek.com>
 * @description: Abstraction for api call in angular, provide your specific params for each methods
 */
var ApiService = /** @class */ (function() {
  function ApiService(http) {
    this.http = http;
  }
  ApiService.prototype.formatErrors = function(error) {
    return rxjs_1.throwError(error.error);
  };
  ApiService.prototype.get = function(url, params) {
    if (params === void 0) {
      params = new http_1.HttpParams();
    }
    return this.http
      .get(url, { params: params })
      .pipe(operators_1.catchError(this.formatErrors));
  };
  ApiService.prototype.put = function(url, body) {
    if (body === void 0) {
      body = {};
    }
    return this.http
      .put(url, JSON.stringify(body))
      .pipe(operators_1.catchError(this.formatErrors));
  };
  ApiService.prototype.post = function(url, body) {
    if (body === void 0) {
      body = {};
    }
    return this.http
      .post(url, JSON.stringify(body))
      .pipe(operators_1.catchError(this.formatErrors));
  };
  ApiService.prototype.delete = function(url) {
    return this.http
      .delete(url)
      .pipe(operators_1.catchError(this.formatErrors));
  };
  ApiService = __decorate(
    [core_1.Injectable(), __metadata('design:paramtypes', [http_1.HttpClient])],
    ApiService,
  );
  return ApiService;
})();
exports.ApiService = ApiService;
//# sourceMappingURL=api.js.map
