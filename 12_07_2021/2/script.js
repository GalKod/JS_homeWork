var Class1 = /** @class */ (function () {
    function Class1(size) {
        this.arrayNew = [];
        this.min = -100;
        this.max = 100;
        this.size = size;
        this.randomNumber();
    }
    Class1.prototype.randomNumber = function () {
        for (var i = 0; i < this.size; i++) {
            this.arrayNew[i] = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        }
    };
    Class1.printArray = function (arr) {
        console.log(JSON.stringify(arr));
    };
    Class1.prototype.filterArray = function () {
        var rezArray;
        rezArray = this.arrayNew.filter(function (i) {
            return i > 10;
        });
        Class1.printArray(rezArray);
    };
    return Class1;
}());
function task1() {
    var s = parseInt(prompt("Enter array size: ") || "0", 10);
    var c = new Class1(s);
    Class1.printArray(c.arrayNew);
    c.filterArray();
}
var Class2 = /** @class */ (function () {
    function Class2() {
        this.lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen";
    }
    Class2.prototype.sortString = function () {
        var arrStr = this.lorem.split(" ");
        console.log("Сформований масив слів: ", JSON.stringify(arrStr));
        arrStr.sort(function (a, b) {
            if (a.length > b.length)
                return 1;
            if (a.length < b.length)
                return -1;
            return 0;
        });
        return arrStr.join(" ");
    };
    return Class2;
}());
function task2() {
    var c = new Class2();
    console.log("Початкові данні: " + c.lorem);
    console.log("Відсортовані дані: ", c.sortString());
}
