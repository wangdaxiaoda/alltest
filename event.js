/**
 * 111
 */
var EventTarget = function () {
    this._listener = {};
};

EventTarget.prototype = {
    constructor: this,
    addEvent: function (type, fn) {
        if (type.constructor === String && typeof fn === "function") {
            if (typeof this._listener[type] === "undefined") {
                this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);
            }
        }
        return this;
    },
    addEvents: function (obj) {
        obj = obj.constructor === Object ? obj : {};
        for (var type in obj) {
            if (type && typeof obj[type] === "function") {
                this.addEvent(type, obj[type]);
            }
        }
        return this;
    },
    fireEvent: function (type) {
        if (type && this._listener[type]) {
            var events={
                type:type,
                target:this
            };
            for (var length = this._listener[type].length, i = 0; i < length; i++) {
                this._listener[type][i].call(this, events);
            }
        }
        return this;
    },
    fireEvents: function (arr) {
        if (arr.constructor === Array) {
            for (var i of arr) {
                this.fireEvent(i);
            }
        }
        return this;
    },
    removeEvent: function (type, key) {
        var listen = this._listener[type];
        if (listen.constructor === Array) {
            if (typeof key === "function") {
                for (var length = listen.length, i = 0; i < length; i++) {
                    if (key == listen[i]) {
                        listen.splice(i, 1);
                        break;
                    }
                }
            } else if (key.constructor === Array) {
                for (var i of key) {
                    this.removeEvent(type, i);
                }
            }
        } else {
            delete this._listener[type];
        }
        return this;
    }
}