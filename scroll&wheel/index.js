const $body = document.getElementsByTagName('body')[0]
const $container1 = document.getElementsByClassName('container1')[0]
const $container2 = document.getElementsByClassName('container2')[0]

//#region 触发条件
// 1. 触发条件
// 1.1 滚轮滚动
// 能触发scroll和wheel事件，wheel先触发，scroll后触发
// 滚动条到达起始点或者终点之后，wheel依然滚动，而scroll不再触发
// 1.2 滚动条拖动
// 只能触发scroll，不能触发wheel
// 1.3 自定义操作触发滚动
// 通过键盘上的向上或者向下按钮（每次修改scrollTop的大小为40） 都可以触发scroll事件
// 通过toTop或者toBottom函数，也能触发scroll
// 如果设置容器的overflow为hidden（就是container2），再去修改容器的scrollTop，依然会触发scroll事件
// 如果设置容器的overflow为hidden，再进行滚轮操作，会触发wheel事件，不会触发scroll事件

// 综上其实可以得出mdn上的描述是正确的的。
// scroll事件会在滚动容器（document或者元素）时触发，而wheel则是在滚动滚轮或者类似输入设备时（触摸板）触发
/**
 * 
 * @param {Event} event 
 */
 function scrollEvent(event) {
    console.log('scroll', event.target.className, event);
}
/**
 * 
 * @param {Event} event 
 */
function wheelEvent(event) {
    console.log('wheel', event.target.className, event.deltaY);
    if (event.target.className === 'content') {
        event.preventDefault()
        event.stopPropagation()
    }
}


/**
 * 
 * @param {HTMLElement} dom 
 */
function addEvent(dom) {
    dom.addEventListener('scroll',scrollEvent)
    dom.addEventListener('wheel', wheelEvent)
}

function removeEvent(dom) {
    
}

addEvent($body)
addEvent($container2)

function toTop() {
    $container2.scrollTop -= 10
}
function toBotttom() {
    $container2.scrollTop += 10
}
//#endregion

//#region 判断方向
// 可以通过wheel事件的deltaY来判断滚动方向，正数向下，负数向上
// mdn的文档上推荐使用scroll事件前后的scrollTop的差值来判断方向，个人觉得一般如果是输入设备引起的滚动，都会触发wheel事件；而非输入设备引起的滚动，一般都是人为控制，自己可以掌握方向。
// 而在想实现模拟滚动条的时候，一般容器都会设置overflow: hidden，而此时得通过监听wheel来实现模拟滚动，通过delta值来判断更合适
//#endregion

//#region 阻止滚动事件冒泡
// 本身不存在滚动事件冒泡的说法，scroll和wheel事件触发时，都不会冒泡
// 但是当滚动条达到某一个顶点时，再次通过触发wheel事件的方式，会让最近的可滚动父元素（一直沿着dom向上找）触发scroll事件，如果父元素无法触发，继续向上，到顶位置
// 而在此研究的便是防止子元素触发的wheel事件，影响到父元素，导致父元素发生scroll
// 实现：可以通过在wheel事件上设置 preventDefault 和 stopPropagation来阻止子元素的影响父元素
//#endregion