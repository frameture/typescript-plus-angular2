var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function anyType(arg) {
    return arg;
}
var stringType = anyType('string');
var implicitStringType = anyType('string');
console.log(anyType(1), anyType(true), stringType, implicitStringType);
var Generic = (function () {
    function Generic() {
        this._collection = new Array();
    }
    Generic.prototype.addElement = function (element) {
        this._collection.push(element);
        return this;
    };
    Generic.prototype.getElement = function () {
        return this._collection.shift();
    };
    return Generic;
}());
var numCollection = new Generic();
var boolCollection = new Generic();
numCollection.addElement(0).addElement(1).addElement(2).addElement(3);
boolCollection.addElement(true).addElement(false).addElement(false);
console.log('number collection', numCollection);
console.log('boolean collection', boolCollection);
var LengthyCollection = (function (_super) {
    __extends(LengthyCollection, _super);
    function LengthyCollection() {
        var _this = _super.call(this) || this;
        _this.length = 0;
        return _this;
    }
    LengthyCollection.prototype.addElement = function (element) {
        _super.prototype.addElement.call(this, element);
        this.length++;
        return this;
    };
    LengthyCollection.prototype.getElement = function () {
        this.length--;
        return _super.prototype.getElement.call(this);
    };
    return LengthyCollection;
}(Generic));
var lengthyColl = new LengthyCollection();
lengthyColl.addElement(3).addElement(2).addElement(1);
console.log(lengthyColl);
function logCollectionLength(coll) {
    console.log(coll.length);
}
var collections = [numCollection, boolCollection, lengthyColl];
// collections.forEach(coll => logCollectionLength(coll));  // Compiler complies
logCollectionLength(lengthyColl);
function copyCollectionToLengthyOne(from, to) {
    var ele = from.getElement();
    while (ele !== undefined) {
        to.addElement(ele);
        ele = from.getElement();
    }
}
copyCollectionToLengthyOne(numCollection, lengthyColl);
console.log(lengthyColl);
var Num = (function () {
    function Num() {
    }
    return Num;
}());
var aliased = { number: 1, length: 1 };
console.log(aliased instanceof Num);
