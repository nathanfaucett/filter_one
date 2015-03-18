var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined"),
    fastBindThis = require("fast_bind_this"),
    isArrayLike = require("is_array_like");


function filterOneArray(array, callback) {
    var length = array.length,
        i = -1,
        il = length - 1,
        value;

    while (i++ < il) {
        value = array[i];

        if (callback(value, i)) {
            return value;
        }
    }

    return undefined;
}

function filterOneObject(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        key, value;

    while (i++ < il) {
        key = objectKeys[i];
        value = object[key];

        if (callback(value, key)) {
            return value;
        }
    }

    return undefined;
}

module.exports = function filterOne(object, callback, thisArg) {
    callback = isNullOrUndefined(thisArg) ? callback : fastBindThis(callback, thisArg, 2);
    return isArrayLike(object) ? filterOneArray(object, callback) : filterOneObject(object, callback);
};
