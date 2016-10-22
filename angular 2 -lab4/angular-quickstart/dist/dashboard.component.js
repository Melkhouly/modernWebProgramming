"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var router_1 = require('@angular/router');
var DashboardComponent = (function () {
    function DashboardComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .then(function (products) { return _this.products = products.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (product) {
        var link = ['/detail', product.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            template: "<h3>Top Products</h3>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let product of products\" (click)=\"gotoDetail(product)\" class=\"col-1-4\">\n    <div class=\"module product\">\n      <h4>{{product.name}}</h4>\n    </div>\n  </div>\n</div>\n",
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map