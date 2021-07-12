"use strict";
exports.__esModule = true;
exports.NumberDiapazon = void 0;
var NumberDiapazon = /** @class */ (function () {
    function NumberDiapazon() {
        this.val = 0;
        this.min = 25;
        this.max = 99;
    }
    NumberDiapazon.prototype.setVal = function () {
        var s = prompt("Enter number (" + this.min + "-" + this.max + "): ");
        if (s != null) {
            var n = parseInt(s);
            if (!(n >= 25 && n <= 99)) {
                this.setVal();
            }
            else {
                this.val = n;
                this.getVal();
            }
        }
    };
    NumberDiapazon.prototype.getVal = function () {
        console.log(this.val);
    };
    return NumberDiapazon;
}());
exports.NumberDiapazon = NumberDiapazon;
