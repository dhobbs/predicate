(typeof exports === 'undefined' ? this['predicate'] = {} : exports);


exports.is = function (expected) {
    return function (value) {
        return value === expected;
    }
};

exports.and = function () {
    var args = arguments;
    return function (value) {
        for (var predicate in args) {
            if (!predicate(value)) return false;
        }
        return true;
    }
};

exports.or = function() {
    var args = arguments;
    return function (value) {
        for (var i = 0; i < args.length; i++) {
            if (args[i](value)) return true;
        }
        return false;
    }
};



