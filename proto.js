//实现原型继承，搞清楚prototype，_proto_
/**
 * 原型继承
 */
// function Smile(style) {
//     this.style = style;
//     this.ownSmile = function () {
//         console.log("ownSmile");
//     }
// }
// Smile.prototype.smile = function () {
//     console.log("smile");
// };
// function Laught(x, y) {
//     Smile.call(this, x);
//     this.y = y;
//     this.laught = function () {
//         console.log("laught");
//     }
// }

// Laught.prototype = new Smile();//Laught原型指向Smile，
// Laught.prototype.constructor = Laught;
// var obj = new Laught(123, "asd");
// console.log(obj.style + " y " + obj.y);
// console.log(obj.constructor);
// obj.ownSmile();
// obj.smile();
// obj.laught();

/**
 * prototype，_proto_
 */
var o = new Object();
prototype和constructor相对应
_proto_原型链的上一级